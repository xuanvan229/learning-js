
const array = [
  {
    "_id": "5cd25061be3bc111931f7dab",
    "label": "Language",
    "key": ":lang",
    "field": false,
    "sortable": false,
    "internal": false,
    "priotize": false,
    "source": "people-members",
    "default": "in",
    "_updated": "2019-05-08T03:43:29.000000Z",
    "_created": "2019-05-08T03:43:29.000000Z",
    "_v": 1,
    "_creator": "54c32ce31c8cf8184161c15c",
    "_updater": "54c32ce31c8cf8184161c15c",
    "_etag": "1b64b1d3369aee629d593ee9e42661cac7e461ec",
    "_links": {
      "self": {
        "title": "QueryMeta Item",
        "href": ":query-meta/people-members/5cd25061be3bc111931f7dab"
      },
      "related": {
        "_updater": {
          "title": "person",
          "href": "people-people/54c32ce31c8cf8184161c15c"
        },
        "_creator": {
          "title": "person",
          "href": "people-people/54c32ce31c8cf8184161c15c"
        }
      }
    }
  },
  {
    "_id": "5cd25097be3bc111931f7dae",
    "label": "Facility",
    "key": ":_facility",
    "field": false,
    "sortable": false,
    "internal": false,
    "priotize": true,
    "source": "people-members",
    "default": "is",
    "_updated": "2019-05-08T03:44:23.000000Z",
    "_created": "2019-05-08T03:44:23.000000Z",
    "_v": 1,
    "_creator": "54c32ce31c8cf8184161c15c",
    "_updater": "54c32ce31c8cf8184161c15c",
    "_etag": "906383e2387fde58d19857bdb4dad6c50d45e4e6",
    "_links": {
      "self": {
        "title": "QueryMeta Item",
        "href": ":query-meta/people-members/5cd25097be3bc111931f7dae"
      },
      "related": {
        "_updater": {
          "title": "person",
          "href": "people-people/54c32ce31c8cf8184161c15c"
        },
        "_creator": {
          "title": "person",
          "href": "people-people/54c32ce31c8cf8184161c15c"
        }
      }
    }
  }
]





const object = array.reduce((accumulator, currentValue) => {
  accumulator[currentValue.key] = currentValue
  return accumulator
}, {})

// const newobj = {}

// newobj[object.key] = {...object}

console.log(object)