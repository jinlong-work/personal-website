import request from '@/utils/request'

export async function getVisitorCity(position, { signal } = {}) {
  const { data } = await request.post(
    '/public/location/city',
    {
      // City lookup does not need the device's full coordinate precision.
      longitude: Number(position.longitude.toFixed(3)),
      latitude: Number(position.latitude.toFixed(3))
    },
    { signal, timeout: 7500, skipAuth: true }
  )
  const city = data.data?.city
  return typeof city === 'string' && city.trim().length <= 64 ? city.trim() : ''
}
