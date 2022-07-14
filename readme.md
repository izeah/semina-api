# Bootcamp MERN 2022 - Spesifikasi API

## Endpoint list

| Name | Routes | HTTP | Deskripsi | Dibuat | Hasil Test | Middleware Auth |
| --- | --- | --- | --- | --- | --- | --- |
| CMS |  |  |  |  |  |  |
| Categories |  |  |  |  |  |  |
|  | /api/v1/cms/categories | GET | Get all categories |  |  | Ya |
|  | /api/v1/cms/categories | POST | Create categories |  |  | Ya |
|  | /api/v1/cms/categories/:id | GET | Get one categories by id |  |  | Ya |
|  | /api/v1/cms/categories/:id | PUT | Update categories |  |  | Ya |
|  | /api/v1/cms/categories/:id | DELETE | Delete categories |  |  | Ya |
| Talents |  |  |  |  |  |  |
|  | /api/v1/cms/talents | GET | Get all talents |  |  | Ya |
|  | /api/v1/cms/talents | POST | Create talents |  |  | Ya |
|  | /api/v1/cms/talents/:id | GET | Get one talents by id |  |  | Ya |
|  | /api/v1/cms/talents/:id | PUT | Update talents |  |  | Ya |
|  | /api/v1/cms/talents/:id | DELETE | Delete talents |  |  | Ya |
|  |  |  |  |  |  |  |
| Images |  |  |  |  |  |  |
|  | /api/v1/cms/images | POST | Create images |  |  | Ya |
|  |  |  |  |  |  |  |
| Events |  |  |  |  |  |  |
|  | /api/v1/cms/events | GET | Get all events |  |  | Ya |
|  | /api/v1/cms/events | POST | Create events |  |  | Ya |
|  | /api/v1/cms/events/:id | GET | Get one event by id |  |  | Ya |
|  | /api/v1/cms/events/:id | PUT | Update events |  |  | Ya |
|  | /api/v1/cms/events/:id | DELETE | Delete events |  |  | Ya |
|  | /api/v1/cms/events/:id/status | PUT | Update status events |  |  | Ya |
|  |  |  |  |  |  |  |
| Payments |  |  |  |  |  |  |
|  | /api/v1/cms/payments | GET | Get all payments |  |  | Ya |
|  | /api/v1/cms/payments | POST | Create payments |  |  | Ya |
|  | /api/v1/cms/payments/:id | GET | Get one payments by id |  |  | Ya |
|  | /api/v1/cms/payments/:id | PUT | Update payments |  |  | Ya |
|  | /api/v1/cms/payments/:id | DELETE | Delete payments |  |  | Ya |
|  |  |  |  |  |  |  |
| Tickets Categories |  |  |  |  |  |  |
|  | /api/v1/cms/tickets-categories | GET | Get all ticket categories |  |  | Ya |
|  | /api/v1/cms/tickets-categories | POST | Create ticket categories |  |  | Ya |
|  | /api/v1/cms/tickets-categories/:id | GET | Get one ticket categories |  |  | Ya |
|  | /api/v1/cms/tickets-categories/:id | PUT | Update ticket categories |  |  | Ya |
|  | /api/v1/cms/tickets-categories/:id | DELETE | Delete ticket categories |  |  | Ya |
|  |  |  |  |  |  |  |
| Order |  |  |  |  |  |  |
|  | /api/v1/orders | GET | Get all order |  |  | Ya |
|  | /api/v1/orders/:id | GET | Get one order by id |  |  | Ya |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
| Auth |  |  |  |  |  |  |
|  | /api/v1/auth/signin | POST | Signin |  |  | Tidak |
|  | /api/v1/cms/organizers | POST | Create admin / organizer |  |  | Ya |
|  |  |  |  |  |  |  |
| Participants |  |  |  |  |  |  |
|  | /api/v1/events | GET | Get all events |  |  | Tidak |
|  | /api/v1/events/:id | GET | Get detail events by id |    |  | Tidak |
|  | /api/v1/events/:id/checkout | POST | Checkout events |  |  | Ya |
|  | /api/v1/dashboard | GET | Get dashboard |  |  | Ya |
|  | /api/v1/dashboard/:id | GET | Get detail dashboard by id |  |  | Ya |
|  | /api/v1/participants/auth/signin | POST | Signin |  |  | Tidak |
|  | /api/v1/participants/auth/signup | POST | Signup |  |  | Tidak |

## Categories endpoint

### 1. Get all categories

Method **GET**

`[http/https]://[domain]/api/v1/cms/categories`

Response body :

```json
{
		"data": [
				{
						"_id": "62aed625829754800e34a91b",
						"name": "Pakaian & Perhiasan",
            "organizer" : {
									"_id" : "ObjectID",
									"name" : "string"
						}
				}
		]
}
```

### 2. Get category by id

Method **GET**

`[http/https]://[domain]/api/v1/cms/categories/:id`

Response Body :

```json
{
		"data": {
				"_id": "62aed625829754800e34a91b",
				"name": "Pakaian & Perhiasan",
        "organizer" : {
						"_id" : "ObjectID",
						"name" : "string"
			  },
				"__v": 0
		}
}
```

### 3. Create category

Method **POST**

`[http/https]://[domain]/api/v1/cms/categories`

Request Body :

```json
{
		"name": "elektronik",
    "organizer": <OrganizerID>
}
```

Response Body :

```json
{
		"data": {
				"_id": "62aff8a8899899ae1dd44e4c",
				"name": "elektronik",
        "organizer": <OrganizerID>,
				"__v": 0
		}
}
```

### 4. Update category

Method **PUT**

`[http/https]://[domain]/api/v1/cms/categories/:id`

Request Body :

```json
{
		"name": "Buku",
    "organizer": <OrganizerID>
}
```

Response Body :

```json
{
		"data": {
				"_id": "62aff8a8899899ae1dd44e4c",
				"name": "Buku",
        "organizer": <OrganizerID>,
				"__v": 0
		}
}
```

### 5. Delete category

Method **DELETE**

`[http/https]://[domain]/api/v1/cms/categories/:id`

Response body :

```json
{
		"data": [
				{
						"_id": "62aed625829754800e34a91b",
						"name": "Pakaian & Perhiasan",
            "organizer": <OrganizerID>,
						"__v": 0
				}
		]
}
```

## Talents endpoint

### 1. Get all talents

Method **GET**

`[http/https]://[domain]/api/v1/cms/talents`

Response body :

```json
{
	"data": [
				{
						"_id" : 827382138172,
						"name" : "string",
	          "role" : "string",
						"organizer": {
	                 "_id": "ObjectID",
	                 "name": "string"
	          },
	          "image": {
                 "_id": "ObjectID",
                 "name": "string"
            },
				}
		]
}
```

### 2. Get talent by id

Method **GET**

`[http/https]://[domain]/api/v1/cms/talents/:id`

Response Body :

```json
{
		"data": {
				"_id" : 827382138172,
				"name" : "string",
        "role" : "string",
        "organizer": {
             "_id": "ObjectID",
             "name": "string"
        },
        "image": {
             "_id": "ObjectID",
             "name": "string"
        },
		}
}
```

### 3. Create talent

Method **POST**

`[http/https]://[domain]/api/v1/cms/talents`

Request Body :

```json
{
		"name": "string",
    "role": "string",
    "organizer": <OrganizerID>,
		"image": <ImageID>,
}
```

Response Body :

```json
{
		"data": {
				"_id": "62aff8a8899899ae1dd44e4c",
				"name": "string",
        "role": "string",
        "organizer": <OrganizerID>,
        "image": <ImageID>,
				"__v": 0
		}
}
```

### 4. Update talent

Method **PUT**

`[http/https]://[domain]/api/v1/cms/talents/:id`

Request Body :

```json
{
		"name": "string",
    "role": "string",
    "organizer_id": <OrganizerID>,
    "image": <ImageID>
}
```

Response Body :

```json
{
		"data": {
				"_id": "62aff8a8899899ae1dd44e4c",
				"name": "Buku",
        "organizer": <OrganizerID>,
        "image": <ImageID>,
				"__v": 0
		}
}
```

### 5. Delete talent

Method **DELETE**

`[http/https]://[domain]/api/v1/cms/talents/:id`

Response body :

```json
{
		"data": {
				"_id": "62aed625829754800e34a91b",
				"name": "string",
        "role": "string",
        "organizer": <OrganizerID>,
        "image": <ImageID>,
				"__v": 0
		}
}
```

## Images endpoint

### 1. Upload image

Method **POST**

`[http/https]://[domain]/api/v1/cms/images`

Request Body :

**Form/data**

| key | value | type |
| --- | --- | --- |
| avatar | image.[png|jpg|jpeg] | file |

Response Body :

```json
{
		"data": {
				"_id": "62aff8a8899899ae1dd44e4c",
				"name": "string",
        "createdAt": "2022-07-04T08:02:03.163Z",
        "updatedAt": "2022-07-04T08:02:03.163Z",
        "__v": 0
		}
}
```

## Events endpoint

### 1. Get all events

Method **GET**

`[http/https]://[domain]/api/v1/cms/events`

Response body :

```json
{
		"data" : [
				{
						"_id" : "ObjectID",
						"title" : "string",
						"date" : "2022-12-07T00:00:00.000Z",
						"about" : "string",
						"tagline" : "string",
						"keypoint" : [
									"string", "string"
						],
						"venueName" : "string",
						"statusEvent" : enum(['DRAFT', 'PUBLISHED']),
						"tickets": [
                {
                    "_id": "ObjectID",
                    "type": "String",
                    "price": Number,
                    "stock": Number,
                    "statusTicketCategory": Boolean,
                    "expiredAt": "2022-12-20T01:00:00.000Z"
                },
            ],
						"category" : {
									"_id" : "ObjectID",
									"name" : "string"
	          }, 
						"image" : {
									"_id" : "ObjectID",
									"name" : "string",
						},
						"talent" : {
									"_id" : "ObjectID",
									"name" : "string",
                  "role" : "String",
                  "image" : {
												"_id" : "ObjectID",
												"name" : "string",
									},
						},
						"organizer" : {
							"_id" : "ObjectID",
							"name" : "string"
						},
            "__v" : 0
				}
		]
}
```

### 2. Get event by id

Method **GET**

`[http/https]://[domain]/api/v1/cms/events/:id`

Response Body :

```json
{
		"data" : {
				"_id" : "ObjectID",
				"title" : "string",
				"date" : "2022-12-07T00:00:00.000Z",
				"about" : "string",
				"tagline" : "string",
				"keypoint" : [
						"string", "string"
				],
				"venueName" : "string",
				"statusEvent" : enum(['DRAFT', 'PUBLISHED']),
				"tickets": [
            {
                "_id": "ObjectID",
                "type": "String",
                "price": Number,
                "stock": Number,
                "statusTicketCategory": Boolean,
                "expiredAt": "2022-12-20T01:00:00.000Z"
            },
        ],
				"category" : {
						"_id" : "ObjectID",
						"name" : "string"
        }, 
				"image" : {
						"_id" : "ObjectID",
						"name" : "string",
				},
				"talent" : {
						"_id" : "ObjectID",
						"name" : "string",
            "role" : "String",
            "image" : {
									"_id" : "ObjectID",
									"name" : "string",
						},
				},
				"organizer" : {
						"_id" : "ObjectID",
						"name" : "string"
				},
        "__v" : 0
		}
}
```

### 3. Create event

Method **POST**

`[http/https]://[domain]/api/v1/cms/events`

Request Body :

```json
{
		"title": "Seminar tentang teknologi",
    "date": "2022-12-07",
    "about": "menjelaskan tentang teknologi",
    "tagline": "SMK Bisa!!",
    "keypoint": ["edan", "cerdas"],
    "venueName": "Venue ABC",
    "statusEvent": "draft",
    "tickets" : [
         {
              "type": "String",
              "price": Number,
              "stock": Number,
              "statusTicketCategory": Boolean,
              "expiredAt": "2022-12-20T01:00:00.000Z"
         },
    ],
    "category": <CategoryID>,
    "talent": <TalentID>,
    "organizer": <OrganizerID>,
		"image": <ImageID>,
}
```

Response Body :

```json
{
		"data": {
				"_id" : "ObjectID",
				"title" : "string",
				"date" : "2022-12-07T00:00:00.000Z",
				"about" : "string",
				"tagline" : "string",
				"keypoint" : [
						"string", "string"
				],
				"venueName" : "string",
				"statusEvent" : enum(['DRAFT', 'PUBLISHED']),
				"tickets": [
            {
                "_id": "ObjectID",
                "type": "String",
                "price": Number,
                "stock": Number,
                "statusTicketCategory": Boolean,
                "expiredAt": "2022-12-20T01:00:00.000Z"
            },
        ],
        "organizer": <OrganizerID>,
        "image": <ImageID>,
        "category": <CategoryID>,
        "talent": <TalentID>,
				"__v": 0
		}
}
```

### 4. Update event

Method **PUT**

`[http/https]://[domain]/api/v1/cms/events/:id`

Request Body :

```json
{
		"title": "Seminar tentang teknologi",
    "date": "2022-12-07",
    "about": "menjelaskan tentang teknologi",
    "tagline": "SMK Bisa!!",
    "keypoint": ["edan", "cerdas"],
    "venueName": "Venue ABC",
    "statusEvent": "draft",
    "tickets" : [
         {
              "type": "String",
              "price": Number,
              "stock": Number,
              "statusTicketCategory": Boolean,
              "expiredAt": "2022-12-20T01:00:00.000Z"
         },
    ],
    "category": <CategoryID>,
    "talent": <TalentID>,
    "organizer": <OrganizerID>,
		"image": <ImageID>,
}
```

Response Body :

```json
{
		"data": {
				"_id" : "ObjectID",
				"title" : "string",
				"date" : "2022-12-07T00:00:00.000Z",
				"about" : "string",
				"tagline" : "string",
				"keypoint" : [
						"string", "string"
				],
				"venueName" : "string",
				"statusEvent" : enum(['DRAFT', 'PUBLISHED']),
				"tickets": [
            {
                "_id": "ObjectID",
                "type": "String",
                "price": Number,
                "stock": Number,
                "statusTicketCategory": Boolean,
                "expiredAt": "2022-12-20T01:00:00.000Z"
            },
        ],
        "organizer": <OrganizerID>,
        "image": <ImageID>,
        "category": <CategoryID>,
        "talent": <TalentID>,
				"__v": 0
		}
}
```

### 5. Update event status

Method **PUT**

`[http/https]://[domain]/api/v1/cms/events/:id/status`

Response Body :

```json
{
		"data": {
				"_id" : "ObjectID",
				"title" : "string",
				"date" : "2022-12-07T00:00:00.000Z",
				"about" : "string",
				"tagline" : "string",
				"keypoint" : [
						"string", "string"
				],
				"venueName" : "string",
				"statusEvent" : enum(['DRAFT', 'PUBLISHED']),
				"tickets": [
            {
                "_id": "ObjectID",
                "type": "String",
                "price": Number,
                "stock": Number,
                "statusTicketCategory": Boolean,
                "expiredAt": "2022-12-20T01:00:00.000Z"
            },
        ],
        "organizer": <OrganizerID>,
        "image": <ImageID>,
        "category": <CategoryID>,
        "talent": <TalentID>,
				"__v": 0
		}
}
```

### 6. Delete event

Method **DELETE**

`[http/https]://[domain]/api/v1/cms/events/:id`

Response body :

```json
{
		"data": {
				"_id" : "ObjectID",
				"title" : "string",
				"date" : "2022-12-07T00:00:00.000Z",
				"about" : "string",
				"tagline" : "string",
				"keypoint" : [
						"string", "string"
				],
				"venueName" : "string",
				"statusEvent" : enum(['DRAFT', 'PUBLISHED']),
				"tickets": [
            {
                "_id": "ObjectID",
                "type": "String",
                "price": Number,
                "stock": Number,
                "statusTicketCategory": Boolean,
                "expiredAt": "2022-12-20T01:00:00.000Z"
            },
        ],
        "organizer": <OrganizerID>,
        "image": <ImageID>,
        "category": <CategoryID>,
        "talent": <TalentID>,
				"__v": 0
		}
}
```