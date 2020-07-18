const envItems = require('./index')

module.exports = {
  "development": {
    "username": envItems.DB_USER,
    "password": envItems.DB_PASS,
    "database": envItems.DB_NAME,
    "host": envItems.DB_HOST,
    "dialect":envItems.DB_TYPE
  },
  "test": {
    "username": envItems.DB_USER,
    "password": envItems.DB_PASS,
    "database": envItems.DB_NAME,
    "host": envItems.DB_HOST,
    "dialect":envItems.DB_TYPE
  },
  "production": {
    "username": envItems.DB_USER,
    "password": envItems.DB_PASS,
    "database": envItems.DB_NAME,
    "host": envItems.DB_HOST,
    "dialect":envItems.DB_TYPE
  }
}
