const token = localStorage.getItem("token");
export const config = {
  headers: {
    authorization: `Bearer ${token}`,
  },
};
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjRhN2FmYzg4MTg3N2ZhYjhkMDE3MiIsImlhdCI6MTY3Njk3ODM0MywiZXhwIjoxNjc3MDY0NzQzfQ.dujnv0_JFUMATx9qcwyTStKudAYaBK8nP0tBZDIfbsk