import request from '@/utils/request'

export function login (data) {
  const form = new FormData()
  form.append('username', data.username)
  form.append('password', data.password)
  return request({
    url: '/user/login',
    method: 'post',
    data: form
  })
}


export function getUserList () {
  return request({
    url: '/user/getUserList',
    method: 'get',
  })
}