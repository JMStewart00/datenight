class drinksCtrl {
	constructor($rootScope, $interval) {
		const ctrl = this;
		ctrl.$rootScope = $rootScope;

	ctrl.bars = [
        {
            "id": "banners-bar-and-grill-lexington",
            "name": "BANNERS Bar and Grill",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Q1k8SPMsSipiUihmlB2W2g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/banners-bar-and-grill-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 17,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "sportsbars",
                    "title": "Sports Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.9787071027871,
                "longitude": -84.5506309934438
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "3650 Boston Rd",
                "address2": "Ste 196",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40514",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3650 Boston Rd",
                    "Ste 196",
                    "Lexington, KY 40514"
                ]
            },
            "phone": "+18592234775",
            "display_phone": "(859) 223-4775",
            "distance": 1231.6012996098
        },
        {
            "id": "teds-montana-grill-lexington-5",
            "name": "Ted's Montana Grill",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/t74YeE6ssu3FyZaYtI9dVw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/teds-montana-grill-lexington-5?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 2,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.9774556,
                "longitude": -84.5276124
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "120 Summit At Fritz Farm",
                "address2": "",
                "address3": "The Summit at Fritz Farm",
                "city": "Lexington",
                "zip_code": "40517",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "120 Summit At Fritz Farm",
                    "The Summit at Fritz Farm",
                    "Lexington, KY 40517"
                ]
            },
            "phone": "+18592869502",
            "display_phone": "(859) 286-9502",
            "distance": 3175.044677108
        },
        {
            "id": "sec-lexington",
            "name": "SEC",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Bwsfqo3SsozOFCfVvoQDgw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sec-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 13,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "musicvenues",
                    "title": "Music Venues"
                }
            ],
            "rating": 2.5,
            "coordinates": {
                "latitude": 37.9968631103945,
                "longitude": -84.5851889625192
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "4379 Old Harrodsburg Rd",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "4379 Old Harrodsburg Rd",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18593178700",
            "display_phone": "(859) 317-8700",
            "distance": 2412.3845665999997
        },
        {
            "id": "harrys-in-palomar-centre-lexington",
            "name": "Harry's in Palomar Centre",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/usT9QiKZoWSI5XnSIcM7TQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/harrys-in-palomar-centre-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 29,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "sportsbars",
                    "title": "Sports Bars"
                },
                {
                    "alias": "burgers",
                    "title": "Burgers"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.0035170969623,
                "longitude": -84.5705500990904
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3735 Palomar Centre Dr",
                "address2": null,
                "address3": null,
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3735 Palomar Centre Dr",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18599772620",
            "display_phone": "(859) 977-2620",
            "distance": 2248.008671142
        },
        {
            "id": "jakes-cigar-bar-and-lounge-nicholasville",
            "name": "Jake's Cigar Bar & Lounge",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Uz2ilZhF4pDR9o15c_5tJA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jakes-cigar-bar-and-lounge-nicholasville?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 16,
            "categories": [
                {
                    "alias": "lounges",
                    "title": "Lounges"
                },
                {
                    "alias": "tobaccoshops",
                    "title": "Tobacco Shops"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.956473,
                "longitude": -84.534171
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "263 E Brannon Rd",
                "address2": "",
                "address3": "",
                "city": "Nicholasville",
                "zip_code": "40356",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "263 E Brannon Rd",
                    "Nicholasville, KY 40356"
                ]
            },
            "phone": "+18592730351",
            "display_phone": "(859) 273-0351",
            "distance": 3978.950884344
        },
        {
            "id": "malones-lexington-3",
            "name": "Malone's",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZiHC8gN8gluN_jG7A4c7zA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/malones-lexington-3?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 86,
            "categories": [
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.0038401889958,
                "longitude": -84.5707683379593
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3735 Palomar Ctr Dr",
                "address2": null,
                "address3": null,
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3735 Palomar Ctr Dr",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18599772620",
            "display_phone": "(859) 977-2620",
            "distance": 2288.248608502
        },
        {
            "id": "the-pub-lexington-lexington-2",
            "name": "The Pub Lexington",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/E5kRyeyE3rV9faXBXs1DZA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-pub-lexington-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 112,
            "categories": [
                {
                    "alias": "pubs",
                    "title": "Pubs"
                },
                {
                    "alias": "british",
                    "title": "British"
                },
                {
                    "alias": "burgers",
                    "title": "Burgers"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.9848424827792,
                "longitude": -84.530499809179
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3750 Mall Rd",
                "address2": null,
                "address3": null,
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3750 Mall Rd",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18599712748",
            "display_phone": "(859) 971-2748",
            "distance": 2831.174746232
        },
        {
            "id": "malabu-pub-and-grill-lexington",
            "name": "Malabu Pub & Grill",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/uq83shJEDVxlOpcKwghpAg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/malabu-pub-and-grill-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 7,
            "categories": [
                {
                    "alias": "pubs",
                    "title": "Pubs"
                },
                {
                    "alias": "poolhalls",
                    "title": "Pool Halls"
                },
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 38.0013716965914,
                "longitude": -84.5175366103649
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "239 Surfside Dr",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "239 Surfside Dr",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592789003",
            "display_phone": "(859) 278-9003",
            "distance": 4439.488148246
        },
        {
            "id": "honeywood-lexington",
            "name": "Honeywood",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/GZpznN7j33PKEd_iXeZu7w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/honeywood-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 18,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.9845657348633,
                "longitude": -84.5028991699219
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "110 Summit At Fritz Farm",
                "address2": "Ste 140",
                "address3": null,
                "city": "Lexington",
                "zip_code": "40517",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "110 Summit At Fritz Farm",
                    "Ste 140",
                    "Lexington, KY 40517"
                ]
            },
            "phone": "+18594698234",
            "display_phone": "(859) 469-8234",
            "distance": 3165.5717799999998
        },
        {
            "id": "bru-burger-bar-lexington-lexington",
            "name": "Bru Burger Bar - Lexington",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/I6VmMOzcuPUq6BMnQtLZbg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/bru-burger-bar-lexington-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 198,
            "categories": [
                {
                    "alias": "burgers",
                    "title": "Burgers"
                },
                {
                    "alias": "beerbar",
                    "title": "Beer Bar"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.015694,
                "longitude": -84.554857
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3010 Lakecrest Cir",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3010 Lakecrest Cir",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18593050082",
            "display_phone": "(859) 305-0082",
            "distance": 3565.4695955039997
        },
        {
            "id": "beaumont-bar-and-grille-lexington",
            "name": "Beaumont Bar & Grille",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/fNJj3-0rUjObb_nswBEeXQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/beaumont-bar-and-grille-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 7,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 38.01685,
                "longitude": -84.5547
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3070 Lakecrest Cir",
                "address2": "Ste 625",
                "address3": null,
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3070 Lakecrest Cir",
                    "Ste 625",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18592190700",
            "display_phone": "(859) 219-0700",
            "distance": 3669.56395978
        },
        {
            "id": "obc-kitchen-lexington",
            "name": "OBC Kitchen",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/EZd0S_pYCRaEnGrLXPx9dQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/obc-kitchen-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 149,
            "categories": [
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.9950994324964,
                "longitude": -84.4964695004246
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3373 Tates Creek Rd",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40502",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3373 Tates Creek Rd",
                    "Lexington, KY 40502"
                ]
            },
            "phone": "+18599772600",
            "display_phone": "(859) 977-2600",
            "distance": 5936.773666462
        },
        {
            "id": "survivors-karaoke-lexington-2",
            "name": "Survivors Karaoke",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/7KU08NMYiV34U19gRPUBFQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/survivors-karaoke-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 3,
            "categories": [
                {
                    "alias": "karaoke",
                    "title": "Karaoke"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.9902001,
                "longitude": -84.520575
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "161 E Renyolds Rd",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40517",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "161 E Renyolds Rd",
                    "Lexington, KY 40517"
                ]
            },
            "phone": "+18592728294",
            "display_phone": "(859) 272-8294",
            "distance": 3758.945415908
        },
        {
            "id": "cork-and-barrel-lexington",
            "name": "Cork & Barrel",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Bys4osEUJCCsBAm9poeG8A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cork-and-barrel-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 4,
            "categories": [
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 38.0074573,
                "longitude": -84.5186577
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "2263 Nicholasville Rd",
                "address2": "Ste 1",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "2263 Nicholasville Rd",
                    "Ste 1",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592789463",
            "display_phone": "(859) 278-9463",
            "distance": 4649.724601014
        },
        {
            "id": "jax-burgers-and-brews-lexington-2",
            "name": "Jax Burgers & Brews",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/YnYchg89T-Ck4YhmuWWvIg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jax-burgers-and-brews-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 22,
            "categories": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "burgers",
                    "title": "Burgers"
                },
                {
                    "alias": "beerbar",
                    "title": "Beer Bar"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 37.9944381713867,
                "longitude": -84.5245971679688
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "161 Lexington Green Cir",
                "address2": "",
                "address3": null,
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "161 Lexington Green Cir",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18595541095",
            "display_phone": "(859) 554-1095",
            "distance": 3526.9893104999996
        },
        {
            "id": "saul-good-restaurant-and-pub-lexington",
            "name": "Saul Good Restaurant & Pub",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/o7uIzvLqZJW_yA1NVm09jQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/saul-good-restaurant-and-pub-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 89,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.9841263331247,
                "longitude": -84.5323078486878
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3801 Mall Rd",
                "address2": "Ste 120",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3801 Mall Rd",
                    "Ste 120",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592734663",
            "display_phone": "(859) 273-4663",
            "distance": 2671.966924316
        },
        {
            "id": "edleys-bar-b-que-lexington",
            "name": "Edley's Bar-B-Que",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JehqOA4LRdln1C5K8gb3UA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/edleys-bar-b-que-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 27,
            "categories": [
                {
                    "alias": "bbq",
                    "title": "Barbeque"
                },
                {
                    "alias": "southern",
                    "title": "Southern"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.977863,
                "longitude": -84.527619
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "114 Summit At Fritz Farm 110",
                "address2": "",
                "address3": null,
                "city": "Lexington",
                "zip_code": "40502",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "114 Summit At Fritz Farm 110",
                    "Lexington, KY 40502"
                ]
            },
            "phone": "+18595234668",
            "display_phone": "(859) 523-4668",
            "distance": 3163.898710136
        },
        {
            "id": "willies-locally-known-lexington",
            "name": "Willie's Locally Known",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/qL5Ibi5Q3_sh8-wBzQVEfQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/willies-locally-known-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 192,
            "categories": [
                {
                    "alias": "musicvenues",
                    "title": "Music Venues"
                },
                {
                    "alias": "bbq",
                    "title": "Barbeque"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 38.0145823,
                "longitude": -84.5230694
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "286 Southland Dr",
                "address2": null,
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "286 Southland Dr",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592811116",
            "display_phone": "(859) 281-1116",
            "distance": 4847.395487995999
        },
        {
            "id": "district-sport-and-tap-lexington-2",
            "name": "District Sport & Tap",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/xgFYZxo5Jij-8hOPw_AY8A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/district-sport-and-tap-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 27,
            "categories": [
                {
                    "alias": "sportsbars",
                    "title": "Sports Bars"
                },
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "poolhalls",
                    "title": "Pool Halls"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.0369491577148,
                "longitude": -84.5154037475586
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1030 S Broadway",
                "address2": "Ste 1B",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40504",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "1030 S Broadway",
                    "Ste 1B",
                    "Lexington, KY 40504"
                ]
            },
            "phone": "+18593091788",
            "display_phone": "(859) 309-1788",
            "distance": 7128.28828616
        },
        {
            "id": "bjs-restaurant-and-brewhouse-lexington-2",
            "name": "BJ's Restaurant & Brewhouse",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/14extdvWsd0Ki5bm_cc0kg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/bjs-restaurant-and-brewhouse-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 75,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "pubs",
                    "title": "Pubs"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 37.9909372844128,
                "longitude": -84.5244594816219
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3297 Nicholasville Rd",
                "address2": "",
                "address3": null,
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3297 Nicholasville Rd",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592782887",
            "display_phone": "(859) 278-2887",
            "distance": 3441.212132236
        }
	],
    

    ctrl.shuffleBars(ctrl.bars);

	}; // constructor

shuffleBars(bars) {
  const ctrl = this;
    for (let i = bars.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [bars[i - 1], bars[j]] = [bars[j], bars[i - 1]];
    }
        // let pickARest = ctrl.dinnerspots[Math.floor(Math.random()*ctrl.dinnerspots.length)];
        // ctrl.pickARest = ctrl.$rootScope.pickARest;
        // console.log(pickARest.name);
};


} //drinksCtrl


export default drinksCtrl;
