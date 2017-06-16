class dinnerCtrl {
  constructor($rootScope, $interval) {
    const ctrl = this;
    ctrl.$rootScope = $rootScope;

    ctrl.dinnerspots = [
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
            "id": "puccinis-smiling-teeth-pizza-and-pasta-lexington-3",
            "name": "Puccini's Smiling Teeth Pizza & Pasta",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/i4h6auiuJEO_P9FyuOdSZg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/puccinis-smiling-teeth-pizza-and-pasta-lexington-3?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 33,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "gluten_free",
                    "title": "Gluten-Free"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.98078,
                "longitude": -84.55163
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "3801 Dylan Pl",
                "address2": null,
                "address3": null,
                "city": "Lexington",
                "zip_code": "40514",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3801 Dylan Pl",
                    "Lexington, KY 40514"
                ]
            },
            "phone": "+18592231588",
            "display_phone": "(859) 223-1588",
            "distance": 1029.484015422
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
            "id": "bella-notte-lexington",
            "name": "Bella Notte",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/AE5cyq34g9Dr3wHTXQsQ_Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/bella-notte-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 213,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.982769,
                "longitude": -84.528317
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3715 Nicholasville Rd",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3715 Nicholasville Rd",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592451789",
            "display_phone": "(859) 245-1789",
            "distance": 3026.12327367
        },
        {
            "id": "johnny-carinos-lexington-2",
            "name": "Johnny Carino's",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/lhgJhojL4j3T3jemblCKGw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/johnny-carinos-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 30,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.9847548,
                "longitude": -84.5282989
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "135 Rojay Dr",
                "address2": null,
                "address3": null,
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "135 Rojay Dr",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592450091",
            "display_phone": "(859) 245-0091",
            "distance": 2903.076677818
        },
        {
            "id": "giuseppes-ristorante-italiano-and-bar-lexington",
            "name": "Giuseppe's Ristorante Italiano & Bar",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/MtSpGlKObkk5uYjzo6PEIA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/giuseppes-ristorante-italiano-and-bar-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 81,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.9684995,
                "longitude": -84.5334678
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "4456 Nicholasville Rd",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40515",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "4456 Nicholasville Rd",
                    "Lexington, KY 40515"
                ]
            },
            "phone": "+18592724269",
            "display_phone": "(859) 272-4269",
            "distance": 3202.336186696
        },
        {
            "id": "asian-wind-lexington",
            "name": "Asian Wind",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/d-QdOlnaSkmyfURdR5UEMQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/asian-wind-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 57,
            "categories": [
                {
                    "alias": "chinese",
                    "title": "Chinese"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.0047156685199,
                "longitude": -84.572498167666
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "3735 Palomar Centre Dr",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3735 Palomar Centre Dr",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18592230060",
            "display_phone": "(859) 223-0060",
            "distance": 2429.5634664299996
        },
        {
            "id": "palmers-fresh-grill-lexington-2",
            "name": "Palmers Fresh Grill",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/B0df-7AfiBcxJQmRf8_pyA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/palmers-fresh-grill-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 124,
            "categories": [
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                },
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.995037115118,
                "longitude": -84.5247028023005
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "161 Lexington Green Cir",
                "address2": "",
                "address3": "The Mall at Lexington Green",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "161 Lexington Green Cir",
                    "The Mall at Lexington Green",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592730103",
            "display_phone": "(859) 273-0103",
            "distance": 3547.45528728
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
        },
        {
            "id": "chick-fil-a-lexington-8",
            "name": "Chick-fil-A",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Pguw1vcxBlmgGXAIBHuAOA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/chick-fil-a-lexington-8?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 3,
            "categories": [
                {
                    "alias": "hotdogs",
                    "title": "Fast Food"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.990026,
                "longitude": -84.528595
            },
            "transactions": [],
            "location": {
                "address1": "3401 Nicholasville Rd",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3401 Nicholasville Rd",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592722614",
            "display_phone": "(859) 272-2614",
            "distance": 3065.56015037
        },
        {
            "id": "chengs-chinese-restaurant-lexington",
            "name": "Cheng's Chinese Restaurant",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Kt1xOY9ZEUB0Cqe8nlFvMQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/chengs-chinese-restaurant-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 56,
            "categories": [
                {
                    "alias": "chinese",
                    "title": "Chinese"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.002673753842,
                "longitude": -84.5453122244591
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "3101 Clays Mill Rd",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3101 Clays Mill Rd",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592239212",
            "display_phone": "(859) 223-9212",
            "distance": 2558.7665924519997
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
            "id": "chilis-lexington-5",
            "name": "Chili's",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/T80GqyzdCi_HHME-uqeoJQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/chilis-lexington-5?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 17,
            "categories": [
                {
                    "alias": "bars",
                    "title": "Bars"
                },
                {
                    "alias": "tex-mex",
                    "title": "Tex-Mex"
                },
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                }
            ],
            "rating": 2.5,
            "coordinates": {
                "latitude": 37.97687,
                "longitude": -84.53052
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "108 Marketplace Dr",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "108 Marketplace Dr",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18599719392",
            "display_phone": "(859) 971-9392",
            "distance": 2945.742051492
        },
        {
            "id": "tropical-smoothie-cafe-lexington-4",
            "name": "Tropical Smoothie Cafe",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/uiyU5Lv8II_frmiDhi--_A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/tropical-smoothie-cafe-lexington-4?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 11,
            "categories": [
                {
                    "alias": "salad",
                    "title": "Salad"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "juicebars",
                    "title": "Juice Bars & Smoothies"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 38.0219846680154,
                "longitude": -84.5595675037833
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "3181 Beaumont Centre Cir",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3181 Beaumont Centre Cir",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18592230032",
            "display_phone": "(859) 223-0032",
            "distance": 4205.8744226379995
        },
        {
            "id": "sahara-mediterranean-cuisine-lexington",
            "name": "Sahara Mediterranean Cuisine",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/uKzVTyaUaQz7pBckkPyHEw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sahara-mediterranean-cuisine-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 229,
            "categories": [
                {
                    "alias": "mediterranean",
                    "title": "Mediterranean"
                },
                {
                    "alias": "mideastern",
                    "title": "Middle Eastern"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 38.0142021179199,
                "longitude": -84.5570907592773
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "3061 Fieldstone Way",
                "address2": "Ste 1200",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3061 Fieldstone Way",
                    "Ste 1200",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18592241138",
            "display_phone": "(859) 224-1138",
            "distance": 3369.8710556399997
        },
        {
            "id": "azur-restaurant-and-patio-lexington",
            "name": "Azur Restaurant & Patio",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/iHatzJn7Q8E5kpUIV0Hpag/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/azur-restaurant-and-patio-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 105,
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
                "address2": "Ste 550",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40513",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3070 Lakecrest Cir",
                    "Ste 550",
                    "Lexington, KY 40513"
                ]
            },
            "phone": "+18592961007",
            "display_phone": "(859) 296-1007",
            "distance": 3669.56395978
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
            "id": "mi-pequena-hacienda-lexington",
            "name": "Mi Pequena Hacienda",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/MG6AgASVz5hEIk9DFZLogw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mi-pequena-hacienda-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 85,
            "categories": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.9885,
                "longitude": -84.5153
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "3501 Lansdowne Dr",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40517",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3501 Lansdowne Dr",
                    "Lexington, KY 40517"
                ]
            },
            "phone": "+18592454679",
            "display_phone": "(859) 245-4679",
            "distance": 4191.630798034
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
            "id": "north-lime-coffee-and-donuts-clays-mill-lexington-2",
            "name": "North Lime Coffee & Donuts - Clays Mill",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1AbfQ6uXvcbm6dwnfKLO8A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/north-lime-coffee-and-donuts-clays-mill-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 58,
            "categories": [
                {
                    "alias": "donuts",
                    "title": "Donuts"
                },
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 38.0027071813706,
                "longitude": -84.5454268910589
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "3101 Clays Mill Rd",
                "address2": "Ste 300A",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3101 Clays Mill Rd",
                    "Ste 300A",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18593036114",
            "display_phone": "(859) 303-6114",
            "distance": 2555.8388811239997
        }
    ],


    ctrl.shuffleDinner(ctrl.dinnerspots);

  }; //constructor

shuffleDinner(dinnerspots) {
  const ctrl = this;
    for (let i = dinnerspots.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [dinnerspots[i - 1], dinnerspots[j]] = [dinnerspots[j], dinnerspots[i - 1]];
    }
        // let pickARest = ctrl.dinnerspots[Math.floor(Math.random()*ctrl.dinnerspots.length)];
        // ctrl.pickARest = ctrl.$rootScope.pickARest;
        // console.log(pickARest.name);
};


} // dinnerCtrl



export default dinnerCtrl;