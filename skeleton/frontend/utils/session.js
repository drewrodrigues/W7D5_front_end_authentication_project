export const postUser = (user) => (
  $.ajax({
    url:  '/api/users',
    type: 'POST',
    data: { user }
  })
)

export const postSession = user => (
  $.ajax({
    url:    '/api/session',
    method: 'POST',
    data:   { data }
  })
)

export const deleteSession = user => (
  $.ajax({
    url:    '/api/session',
    method: 'DELETE'
  })
)