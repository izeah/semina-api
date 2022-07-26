# Bootcamp MERN 2022 - Spesifikasi API

## Endpoint list

| Name               | Routes                             | HTTP   | Deskripsi                  | Dibuat | Hasil Test | Middleware Auth |
| ------------------ | ---------------------------------- | ------ | -------------------------- | ------ | ---------- | --------------- |
| CMS                |                                    |        |                            |        |            |                 |
| Categories         |                                    |        |                            |        |            |                 |
|                    | /api/v1/cms/categories             | GET    | Get all categories         |        |            | Ya              |
|                    | /api/v1/cms/categories             | POST   | Create categories          |        |            | Ya              |
|                    | /api/v1/cms/categories/:id         | GET    | Get one categories by id   |        |            | Ya              |
|                    | /api/v1/cms/categories/:id         | PUT    | Update categories          |        |            | Ya              |
|                    | /api/v1/cms/categories/:id         | DELETE | Delete categories          |        |            | Ya              |
| Talents            |                                    |        |                            |        |            |                 |
|                    | /api/v1/cms/talents                | GET    | Get all talents            |        |            | Ya              |
|                    | /api/v1/cms/talents                | POST   | Create talents             |        |            | Ya              |
|                    | /api/v1/cms/talents/:id            | GET    | Get one talents by id      |        |            | Ya              |
|                    | /api/v1/cms/talents/:id            | PUT    | Update talents             |        |            | Ya              |
|                    | /api/v1/cms/talents/:id            | DELETE | Delete talents             |        |            | Ya              |
|                    |                                    |        |                            |        |            |                 |
| Images             |                                    |        |                            |        |            |                 |
|                    | /api/v1/cms/images                 | POST   | Create images              |        |            | Ya              |
|                    |                                    |        |                            |        |            |                 |
| Events             |                                    |        |                            |        |            |                 |
|                    | /api/v1/cms/events                 | GET    | Get all events             |        |            | Ya              |
|                    | /api/v1/cms/events                 | POST   | Create events              |        |            | Ya              |
|                    | /api/v1/cms/events/:id             | GET    | Get one event by id        |        |            | Ya              |
|                    | /api/v1/cms/events/:id             | PUT    | Update events              |        |            | Ya              |
|                    | /api/v1/cms/events/:id             | DELETE | Delete events              |        |            | Ya              |
|                    | /api/v1/cms/events/:id/status      | PUT    | Update status events       |        |            | Ya              |
|                    |                                    |        |                            |        |            |                 |
| Payments           |                                    |        |                            |        |            |                 |
|                    | /api/v1/cms/payments               | GET    | Get all payments           |        |            | Ya              |
|                    | /api/v1/cms/payments               | POST   | Create payments            |        |            | Ya              |
|                    | /api/v1/cms/payments/:id           | GET    | Get one payments by id     |        |            | Ya              |
|                    | /api/v1/cms/payments/:id           | PUT    | Update payments            |        |            | Ya              |
|                    | /api/v1/cms/payments/:id           | DELETE | Delete payments            |        |            | Ya              |
|                    |                                    |        |                            |        |            |                 |
| Tickets Categories |                                    |        |                            |        |            |                 |
|                    | /api/v1/cms/tickets-categories     | GET    | Get all ticket categories  |        |            | Ya              |
|                    | /api/v1/cms/tickets-categories     | POST   | Create ticket categories   |        |            | Ya              |
|                    | /api/v1/cms/tickets-categories/:id | GET    | Get one ticket categories  |        |            | Ya              |
|                    | /api/v1/cms/tickets-categories/:id | PUT    | Update ticket categories   |        |            | Ya              |
|                    | /api/v1/cms/tickets-categories/:id | DELETE | Delete ticket categories   |        |            | Ya              |
|                    |                                    |        |                            |        |            |                 |
| Order              |                                    |        |                            |        |            |                 |
|                    | /api/v1/orders                     | GET    | Get all order              |        |            | Ya              |
|                    | /api/v1/orders/:id                 | GET    | Get one order by id        |        |            | Ya              |
|                    |                                    |        |                            |        |            |                 |
|                    |                                    |        |                            |        |            |                 |
| Auth               |                                    |        |                            |        |            |                 |
|                    | /api/v1/auth/signin                | POST   | Signin                     |        |            | Tidak           |
|                    | /api/v1/cms/organizers             | POST   | Create admin / organizer   |        |            | Ya              |
|                    |                                    |        |                            |        |            |                 |
| Participants       |                                    |        |                            |        |            |                 |
|                    | /api/v1/events                     | GET    | Get all events             |        |            | Tidak           |
|                    | /api/v1/events/:id                 | GET    | Get detail events by id    |        |            | Tidak           |
|                    | /api/v1/events/:id/checkout        | POST   | Checkout events            |        |            | Ya              |
|                    | /api/v1/dashboard                  | GET    | Get dashboard              |        |            | Ya              |
|                    | /api/v1/dashboard/:id              | GET    | Get detail dashboard by id |        |            | Ya              |
|                    | /api/v1/participants/auth/signin   | POST   | Signin                     |        |            | Tidak           |
|                    | /api/v1/participants/auth/signup   | POST   | Signup                     |        |            | Tidak           |

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
            "organizer": {
                "_id": "ObjectID",
                "name": "String"
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
        "organizer": {
            "_id": "ObjectID",
            "name": "String"
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
    "name": "elektronik"
}
```

Response Body :

```json
{
    "data": {
        "_id": "62aff8a8899899ae1dd44e4c",
        "name": "elektronik",
        "organizer": "ObjectID",
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
    "name": "Buku"
}
```

Response Body :

```json
{
    "data": {
        "_id": "62aff8a8899899ae1dd44e4c",
        "name": "Buku",
        "organizer": "ObjectID",
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
            "organizer": "ObjectID",
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
            "_id": "ObjectID",
            "name": "String",
            "role": "String",
            "organizer": {
                "_id": "ObjectID",
                "name": "String"
            },
            "image": {
                "_id": "ObjectID",
                "name": "String"
            }
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
        "_id": "ObjectID",
        "name": "String",
        "role": "String",
        "organizer": {
            "_id": "ObjectID",
            "name": "String"
        },
        "image": {
            "_id": "ObjectID",
            "name": "String"
        }
    }
}
```

### 3. Create talent

Method **POST**

`[http/https]://[domain]/api/v1/cms/talents`

Request Body :

```json
{
    "name": "String",
    "role": "String",
    "image": "ObjectID"
}
```

Response Body :

```json
{
    "data": {
        "_id": "ObjectID",
        "name": "String",
        "role": "String",
        "organizer": "ObjectID",
        "image": "ObjectID",
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
    "name": "String",
    "role": "String",
    "image": "ObjectID"
}
```

Response Body :

```json
{
    "data": {
        "_id": "ObjectID",
        "name": "Buku",
        "organizer": "ObjectID",
        "image": "ObjectID",
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
        "_id": "ObjectID",
        "name": "String",
        "role": "String",
        "organizer": "ObjectID",
        "image": "ObjectID",
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

| key    | value      | type |
| ------ | ---------- | ---- | ----- | ---- |
| avatar | image.[png | jpg  | jpeg] | file |

Response Body :

```json
{
    "data": {
        "_id": "ObjectID",
        "name": "String",
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
			"title" : "String",
			"date" : "2022-12-07T00:00:00.000Z",
			"about" : "String",
			"tagline" : "String",
			"keypoint" : [
						"String"
			],
			"venueName" : "String",
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
				"name" : "String"
			},
			"image" : {
				"_id" : "ObjectID",
				"name" : "String",
			},
			"talent" : {
				"_id" : "ObjectID",
				"name" : "String",
				"role" : "String",
				"image" : {
					"_id" : "ObjectID",
					"name" : "String",
				},
			},
			"organizer" : {
				"_id" : "ObjectID",
				"name" : "String"
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
		"title" : "String",
		"date" : "2022-12-07T00:00:00.000Z",
		"about" : "String",
		"tagline" : "String",
		"keypoint" : [
			"String"
		],
		"venueName" : "String",
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
			"name" : "String"
        },
		"image" : {
			"_id" : "ObjectID",
			"name" : "String"
		},
		"talent" : {
			"_id" : "ObjectID",
			"name" : "String",
			"role" : "String",
			"image" : {
				"_id" : "ObjectID",
				"name" : "String"
			}
		},
		"organizer" : {
			"_id" : "ObjectID",
			"name" : "String"
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
    "statusEvent": "DRAFT",
    "tickets" : [
         {
              "type": "String",
              "price": Number,
              "stock": Number,
              "statusTicketCategory": Boolean,
              "expiredAt": "2022-12-20T01:00:00.000Z"
         },
    ],
    "category": "ObjectID",
    "talent": "ObjectID",
	"image": "ObjectID"
}
```

Response Body :

```json
{
	"data": {
		"_id" : "ObjectID",
		"title" : "String",
		"date" : "2022-12-07T00:00:00.000Z",
		"about" : "String",
		"tagline" : "String",
		"keypoint" : [
			"String"
		],
		"venueName" : "String",
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
		"organizer": "ObjectID",
		"image": "ObjectID",
		"category": "ObjectID",
		"talent": "ObjectID",
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
	"title": "String",
    "date": "2022-12-07",
    "about": "String",
    "tagline": "String",
    "keypoint": [
		"String"
	],
    "venueName": "String",
    "statusEvent": enum(['DRAFT', 'PUBLISHED']),
    "tickets" : [
         {
              "type": "String",
              "price": Number,
              "stock": Number,
              "statusTicketCategory": Boolean,
              "expiredAt": "2022-12-20T01:00:00.000Z"
         },
    ],
    "category": "ObjectID",
    "talent": "ObjectID",
	"image": "ObjectID",
}
```

Response Body :

```json
{
	"data": {
		"_id" : "ObjectID",
		"title" : "String",
		"date" : "2022-12-07T00:00:00.000Z",
		"about" : "String",
		"tagline" : "String",
		"keypoint" : [
			"String"
		],
		"venueName" : "String",
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
		"organizer": "ObjectID",
		"image": "ObjectID",
		"category": "ObjectID",
		"talent": "ObjectID",
		"__v": 0
	}
}
```

### 5. Update event status

Method **PUT**

`[http/https]://[domain]/api/v1/cms/events/:id/status`

Request Body :

```json
{
    "statusEvent": enum(['DRAFT', 'PUBLISHED'])
}
```

Response Body :

```json
{
	"data": {
		"_id" : "ObjectID",
		"title" : "String",
		"date" : "2022-12-07T00:00:00.000Z",
		"about" : "String",
		"tagline" : "String",
		"keypoint" : [
			"String"
		],
		"venueName" : "String",
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
		"organizer": "ObjectID",
		"image": "ObjectID",
		"category": "ObjectID",
		"talent": "ObjectID",
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
		"title" : "String",
		"date" : "2022-12-07T00:00:00.000Z",
		"about" : "String",
		"tagline" : "String",
		"keypoint" : [
			"String"
		],
		"venueName" : "String",
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
		"organizer": "ObjectID",
		"image": "ObjectID",
		"category": "ObjectID",
		"talent": "ObjectID",
		"__v": 0
	}
}
```

## Orders endpoint

### 1. Get all orders

Method **GET**

`[http/https]://[domain]/api/v1/cms/orders`

Response body :

```json
{
	"data" : [
		{
			"_id" : "ObjectID",
			"date" : "2022-12-07T00:00:00.000Z",
			"personalDetail" : {
				"firstName": "String",
				"lastName": "String",
				"email": "String"
			},
			"status" : enum(['PENDING', 'PAID']),
			"totalPay": Number,
			"totalOrderTicket": Number,
			"orderItems": [
				{
					"ticketCategories": {
						"type": "String",
						"price": Number
					},
					"sumTicket": Number,
				}
			],
			"participant" : {
				"_id" : "ObjectID",
				"name" : "String"
			},
			"payment" : {
				"_id" : "ObjectID",
				"type" : "String"
			},
			"event" : {
				"_id" : "ObjectID",
				"name" : "String",
			},
			"historyEvent": {
				"organizer" : {
					"_id" : "ObjectID",
					"name" : "String"
				},
			},
			"__v" : 0
		}
	]
}
```

## Payments endpoint

### 1. Get all payments

Method **GET**

`[http/https]://[domain]/api/v1/cms/payments`

Response body :

```json
{
	"data" : [
		{
			"_id" : "ObjectID",
			"type" : "String",
			"status" : Boolean,
			"image" : {
				"_id" : "ObjectID",
				"name" : "String",
			},
			"organizer" : {
				"_id" : "ObjectID",
				"name" : "String"
			},
			"__v" : 0
		}
	]
}
```

### 2. Get payment by id

Method **GET**

`[http/https]://[domain]/api/v1/cms/payments/:id`

Response Body :

```json
{
	"data" : {
		"_id" : "ObjectID",
		"type" : "String",
		"status" : Boolean,
		"image" : {
			"_id" : "ObjectID",
			"name" : "String",
		},
		"organizer" : {
			"_id" : "ObjectID",
			"name" : "String"
		},
        "__v" : 0
	}
}
```

### 3. Create event

Method **POST**

`[http/https]://[domain]/api/v1/cms/payments`

Request Body :

```json
{
    "type": "String",
    "image": "ObjectID"
}
```

Response Body :

```json
{
	"data": {
		"_id" : "ObjectID",
		"type" : "String",
		"status" : Boolean,
		"image" : {
			"_id" : "ObjectID",
			"name" : "String",
		},
		"organizer" : {
			"_id" : "ObjectID",
			"name" : "String"
		},
		"__v" : 0
	}
}
```

### 4. Update event

Method **PUT**

`[http/https]://[domain]/api/v1/cms/events/:id`

Request Body :

```json
{
    "type": "String",
    "image": "ObjectID"
}
```

Response Body :

```json
{
	"data": {
		"_id" : "ObjectID",
		"type" : "String",
		"status" : Boolean,
		"image" : {
			"_id" : "ObjectID",
			"name" : "String",
		},
		"organizer" : {
			"_id" : "ObjectID",
			"name" : "String"
		},
        "__v" : 0
	}
}
```

### 5. Delete payment

Method **DELETE**

`[http/https]://[domain]/api/v1/cms/payments/:id`

Response body :

```json
{
	"data": {
		"_id" : "ObjectID",
		"type" : "String",
		"status" : Boolean,
		"image" : {
			"_id" : "ObjectID",
			"name" : "String",
		},
		"organizer" : {
			"_id" : "ObjectID",
			"name" : "String"
		},
		"__v" : 0
	}
}
```

## Auth endpoint

### 1. Sign In

Method **POST**

`[http/https]://[domain]/api/v1/cms/auth/signin`

Request Body :

```json
{
    "email": "String",
    "password": "String"
}
```

Response body :

```json
{
    "data": {
        "_id": "ObjectID",
        "name": "String",
        "email": "String",
        "role": "String",
        "organizer": "ObjectID",
        "__v": 0,
        "token": "String"
    }
}
```

### 2. Sign Up (Organizer)

Method **POST**

`[http/https]://[domain]/api/v1/cms/organizers`

Request Body :

```json
{
    "organizer": "String",
    "name": "String",
    "role": "String",
    "email": "String",
    "password": "String",
    "confirmPassword": "String"
}
```

Response body :

```json
{
    "data": {
        "_id": "ObjectID",
        "name": "String",
        "email": "String",
        "role": "String",
        "organizer": "ObjectID",
        "__v": 0
    }
}
```

### 3. Sign Up (Users)

Method **POST**

`[http/https]://[domain]/api/v1/cms/organizers`

Request Body :

```json
{
    "name": "String",
    "role": "String",
    "email": "String",
    "password": "String",
    "confirmPassword": "String"
}
```

Response body :

```json
{
    "data": {
        "_id": "ObjectID",
        "name": "String",
        "email": "String",
        "role": "String",
        "organizer": "ObjectID",
        "__v": 0
    }
}
```

## Participant endpoint

### 1. Sign In

Method **POST**

`[http/https]://[domain]/api/v1/auth/signin`

Request Body :

```json
{
    "email": "String",
    "password": "String"
}
```

Response body :

```json
{
    "data": {
        "_id": "ObjectID",
        "firstName": "String",
        "lastName": "String",
        "email": "String",
        "role": "String",
        "status": "String",
        "otp": "String",
        "__v": 0,
        "token": "String"
    }
}
```

### 2. Sign Up

Method **POST**

`[http/https]://[domain]/api/v1/auth/signup`

Request Body :

```json
{
    "firstName": "String",
    "lastName": "String",
    "email": "String",
    "password": "String"
}
```

Response body :

```json
{
    "data": {
        "_id": "ObjectID",
        "firstName": "String",
        "lastName": "String",
        "email": "String",
        "role": "String",
        "status": "String",
        "__v": 0
    }
}
```

### 3. Activate Parcipant Account

Method **PUT**

`[http/https]://[domain]/api/v1/active`

Request Body :

```json
{
    "email": "String",
    "otp": "String"
}
```

Response body :

```json
{
    "data": {
        "_id": "ObjectID",
        "firstName": "String",
        "lastName": "String",
        "email": "String",
        "role": "String",
        "status": "String",
        "__v": 0
    }
}
```

### 4. Get Participant Orders (Dashboard)

Method **GET**

`[http/https]://[domain]/api/v1/orders`

Response body :

```json
{
	"data" : [
		{
			"_id" : "ObjectID",
			"date": "2022-07-22T02:01:38.154Z",
			"status": enum(['PENDING', 'PAID']),
			"totalPay": Number,
			"totalOrderTicket": Number,
			"personalDetail": {
				"firstName": "String",
				"lastName": "String",
				"email": "String"
			},
			"historyEvent": {
				"title": "String",
				"date": "2022-07-20T01:00:00.000Z",
				"about": "menjelaskan tentang teknologi",
				"tagline": "String",
				"keyPoint": [
					"String"
				],
				"venueName": "String",
				"tickets": [
					{
						"ticketCategories": {
							"type": "String",
							"price": Number
						},
						"sumTicket": Number
					}
				],
				"image": "ObjectID",
				"category": "ObjectID",
				"talent": "ObjectID",
				"organizer": "ObjectID"
			},
			"orderItems": [
				{
					"ticketCategories": {
						"type": "String",
						"price": Number
					},
					"sumTicket": Number,
					"_id": "ObjectID"
				}
			],
			"participant": "ObjectID",
			"payment": "ObjectID",
			"event": "ObjectID",
			"__v" : 0
		}
	]
}
```

### 5. Get Participant Events (Landing Page)

Method **GET**

`[http/https]://[domain]/api/v1/events`

Response body :

```json
{
	"data" : [
		{
			"_id" : "ObjectID",
			"title": "String",
			"date": "2022-07-20T01:00:00.000Z",
			"venueName": "String",
			"tickets": [
				{
					"type": "String",
					"price": Number,
					"stock": Number,
					"statusTicketCategory": Boolean,
					"expiredAt": "2022-12-20T01:00:00.000Z",
					"_id": "Object"
				}
			],
			"image": {
				"_id" : "ObjectID",
				"name" : "String"
			},
			"category": {
				"_id": "ObjectID",
				"name": "String",
				"organizer" : "ObjectID",
			},
			"__v" : 0
		}
	]
}
```

### 6. Get Participant Event By ID (Landing Page)

Method **GET**

`[http/https]://[domain]/api/v1/events/:id`

Response body :

```json
{
	"data" : {
		"_id" : "ObjectID",
		"title": "String",
		"date": "2022-07-20T01:00:00.000Z",
		"about": "menjelaskan tentang teknologi",
		"tagline": "String",
		"keypoint": [
			"String"
		],
		"venueName": "String",
		"statusEvent": "PUBLISHED",
		"tickets": [
			{
				"type": "String",
				"price": Number,
				"stock": Number,
				"statusTicketCategory": Boolean,
				"expiredAt": "2022-12-20T01:00:00.000Z",
				"_id": "Object"
			}
		],
		"image": {
			"_id" : "ObjectID",
			"name" : "String"
		},
		"category": {
			"_id": "ObjectID",
			"name": "String",
			"organizer" : "ObjectID",
		},
		"talent": {
			"_id": "ObjectID",
			"name": "String",
			"role": "String",
			"image": "ObjectID",
			"organizer": "ObjectID",
		},
		"organizer": "ObjectID",
		"__v" : 0
	}
}
```

### 7. Checkout Participant Order

Method **GET**

`[http/https]://[domain]/api/v1/checkout`

Request Body :

```json
{
    "payment": "ObjectID",
    "event": "ObjectID",
	"personalDetail": {
        "firstName": "String",
        "lastName": "String",
        "email": "String"
    },
	"tickets": [
		{
			"ticketCategories": {
				"type": "String",
				"price": Number
			},
			"sumTicket": Number
		}
	]
}
```

Response body :

```json
{
	"data" : {
        "_id": "ObjectID",
        "date": "2022-07-20T01:00:00.000Z",
		"personalDetail": {
			"firstName": "String",
			"lastName": "String",
			"email": "String"
		},
        "totalPay": Number,
        "totalOrderTicket": Number,
        "status": enum(['PENDING', 'PAID']),
        "orderItems": [
			{
				"ticketCategories": {
					"type": "String",
					"price": Number
				},
				"sumTicket": Number
			}
		],
        "historyEvent": {
            "title": "String",
            "date": "2022-07-20T01:00:00.000Z",
            "about": "menjelaskan tentang teknologi",
            "tagline": "String",
            "keyPoint": [
				"String"
			],
            "venueName": "String",
            "tickets": [
                {
                    "ticketCategories": {
                        "type": "String",
                        "price": Number
                    },
                    "sumTicket": Number
                }
            ],
            "image": "ObjectID",
            "category": "ObjectID",
            "talent": "ObjectID",
            "organizer": "ObjectID"
        },
        "participant": "ObjectID",
        "payment": "ObjectID",
        "event": "ObjectID",
        "__v" : 0
	}
}
```
