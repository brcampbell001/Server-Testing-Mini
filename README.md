# Example of API Documentation
Here's the description of our glorious API! *NOTE:* interfacing with our API will bring you much joy and happiness.

## Port - location of all endpoints to interface with our API is at `http://localhost:3030`

## [POST] `/api/powerrangers/create`
| Endpoint | Type | Data |
| -------- | :----: | ----: |
| /api/powerrangers | POST | json |

#### Example:
```
{
  rangerName: 'Red',
  streetName: 'Jason'.
  megazord: 'TRex'
}
```

## [GET] `/api/powerrangers/all

```
[
  {
    ...
  },
  {
    ...
  }
]
```
