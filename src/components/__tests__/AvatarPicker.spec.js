import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AvatarPicker from '@/components/AvatarPicker.vue'
import UserAvatar from '@/components/UserAvatar.vue'

let wrapper

beforeEach(() => {
  vi.stubGlobal('URL', Object.assign(URL, {
    createObjectURL: vi.fn(() => 'blob:avatar-preview'),
    revokeObjectURL: vi.fn()
  }))
})
afterEach(() => { wrapper?.unmount(); vi.unstubAllGlobals() })

async function select(file) {
  const input = wrapper.get('input[type="file"]')
  Object.defineProperty(input.element, 'files', { configurable: true, value: [file] })
  await input.trigger('change')
}

describe('头像选择与显示', () => {
  it('previews a selected image and releases its browser object URL', async () => {
    wrapper = mount(AvatarPicker, { props: { name: '管理员' } })
    const file = new File(['image'], 'avatar.png', { type: 'image/png' })
    await select(file)
    expect(wrapper.emitted('update:file')[0]).toEqual([file])
    await wrapper.setProps({ file })
    expect(wrapper.get('img').attributes('src')).toBe('blob:avatar-preview')
    await wrapper.setProps({ file: null })
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:avatar-preview')
  })

  it('rejects non-images and files larger than 2MB without changing the saved avatar', async () => {
    wrapper = mount(AvatarPicker, { props: { modelValue: `/files/avatars/${'a'.repeat(32)}.png` } })
    await select(new File(['<svg/>'], 'avatar.svg', { type: 'image/svg+xml' }))
    expect(wrapper.get('[role="alert"]').text()).toContain('仅支持JPG和PNG')
    await select(new File([new Uint8Array(2 * 1024 * 1024 + 1)], 'large.png', { type: 'image/png' }))
    expect(wrapper.get('[role="alert"]').text()).toContain('不能超过2MB')
    expect(wrapper.emitted('update:file')).toBeUndefined()
    expect(wrapper.get('img').attributes('src')).toBe(`/api/files/avatars/${'a'.repeat(32)}.png`)
  })

  it('removes both the selected file and current avatar', async () => {
    wrapper = mount(AvatarPicker, { props: { modelValue: `/files/avatars/${'a'.repeat(32)}.png` } })
    await wrapper.get('.remove-avatar').trigger('click')
    expect(wrapper.emitted('update:file')[0]).toEqual([null])
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([''])
  })

  it('falls back to the account initial when the image cannot load', async () => {
    wrapper = mount(UserAvatar, { props: { name: '管理员', avatar: `/files/avatars/${'a'.repeat(32)}.png` } })
    await wrapper.get('img').trigger('error')
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.text()).toBe('管')
    await wrapper.setProps({ avatar: `/files/avatars/${'b'.repeat(32)}.png` })
    expect(wrapper.find('img').exists()).toBe(true)
  })
})
