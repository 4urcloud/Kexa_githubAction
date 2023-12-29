<div align="center">
    <a href="https://www.kexa.io/addOn/azure">
        <img src="../../images/MongoDB-Logo.png" alt="Logo" width="200">
    </a>

# <h3 align="center">Mongo DB</h3>

  <p align="center">
    <br />
    <a href="https://github.com/4urcloud/Kexa/issues">Report Bug</a>
    ·
    <a href="https://github.com/4urcloud/Kexa/issues">Request Feature</a>
  </p>
</div>

## Configuration

### Default.json

For each of your database, keys mandatory:

- "urlName": url connection to access (with database in the url)
- "collectionName": name of the collection where to store the data. If it's not exist we create it.

Example config for each identification you can use:
![example config for azure](../../config/demo/mongoDB.default.json)

### Environment

urlName can be use to refer to a specific value in your environnement with his name as value.