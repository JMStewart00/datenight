class activityCtrl {
	constructor($rootScope, $interval) {
		let ctrl = this;
		ctrl.$rootScope = $rootScope;

	ctrl.activities = [
        {
            "id": "sky-zone-trampoline-park-lexington-6",
            "name": "Sky Zone Trampoline Park",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/btf2FHAT_Su-CfGTmDvRjw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sky-zone-trampoline-park-lexington-6?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 12,
            "categories": [
                {
                    "alias": "trampoline",
                    "title": "Trampoline Parks"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.9803924560547,
                "longitude": -84.548583984375
            },
            "transactions": [],
            "location": {
                "address1": "3644 Boston Rd",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40514",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3644 Boston Rd",
                    "Lexington, KY 40514"
                ]
            },
            "phone": "+18596294455",
            "display_phone": "(859) 629-4455",
            "distance": 1358.4180801864
        },
        {
            "id": "sup-kentucky-lexington",
            "name": "Sup Kentucky",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/JJKzBm1wt5O3HN1CHr0ViA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sup-kentucky-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 2,
            "categories": [
                {
                    "alias": "paddleboarding",
                    "title": "Paddleboarding"
                },
                {
                    "alias": "boating",
                    "title": "Boating"
                },
                {
                    "alias": "surfing",
                    "title": "Surfing"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.98755,
                "longitude": -84.50773
            },
            "transactions": [],
            "location": {
                "address1": "3441 Laredo Dr",
                "address2": null,
                "address3": "",
                "city": "Lexington",
                "zip_code": "40517",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3441 Laredo Dr",
                    "Lexington, KY 40517"
                ]
            },
            "phone": "+18595091502",
            "display_phone": "(859) 509-1502",
            "distance": 4798.701687616
        },
        {
            "id": "waverly-park-lexington",
            "name": "Waverly Park",
            "image_url": "",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/waverly-park-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 1,
            "categories": [
                {
                    "alias": "parks",
                    "title": "Parks"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.9886289942905,
                "longitude": -84.5744778960943
            },
            "transactions": [],
            "location": {
                "address1": "4244 Southmoor Park",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40514",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "4244 Southmoor Park",
                    "Lexington, KY 40514"
                ]
            },
            "phone": "",
            "display_phone": "",
            "distance": 1133.7754594744
        },
        {
            "id": "fitness-19-lexington",
            "name": "Fitness 19",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/5-pkyIAMJYrAl8HRRIB2Tw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fitness-19-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 5,
            "categories": [
                {
                    "alias": "gyms",
                    "title": "Gyms"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.9792558,
                "longitude": -84.5495524
            },
            "transactions": [],
            "location": {
                "address1": "3650 Boston Rd",
                "address2": "Ste T",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40514",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3650 Boston Rd",
                    "Ste T",
                    "Lexington, KY 40514"
                ]
            },
            "phone": "+18592961219",
            "display_phone": "(859) 296-1219",
            "distance": 1286.5947004858
        },
        {
            "id": "martial-arts-usa-lexington",
            "name": "Martial Arts USA",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zs1Vr0rtj4G9nvdGzZLPtg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/martial-arts-usa-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 2,
            "categories": [
                {
                    "alias": "martialarts",
                    "title": "Martial Arts"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.979808807373,
                "longitude": -84.5494232177734
            },
            "transactions": [],
            "location": {
                "address1": "3650 Boston Rd",
                "address2": "Ste R",
                "address3": null,
                "city": "Lexington",
                "zip_code": "40514",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "3650 Boston Rd",
                    "Ste R",
                    "Lexington, KY 40514"
                ]
            },
            "phone": "+18592240060",
            "display_phone": "(859) 224-0060",
            "distance": 1286.5947004858
        },
        {
            "id": "strong-shop-fitness-nicholasville",
            "name": "Strong Shop Fitness",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/bEOBmUgUAussoQ-ZC1terw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/strong-shop-fitness-nicholasville?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 1,
            "categories": [
                {
                    "alias": "gyms",
                    "title": "Gyms"
                },
                {
                    "alias": "healthtrainers",
                    "title": "Trainers"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.9856244474649,
                "longitude": -84.5907535403967
            },
            "transactions": [],
            "location": {
                "address1": "176 Bellerice Blvd",
                "address2": null,
                "address3": "",
                "city": "Nicholas Viall",
                "zip_code": "40356",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "176 Bellerice Blvd",
                    "Nicholas Viall, KY 40356"
                ]
            },
            "phone": "+18592199473",
            "display_phone": "(859) 219-9473",
            "distance": 2330.9075448159997
        },
        {
            "id": "the-arboretum-state-botanical-garden-of-kentucky-lexington",
            "name": "The Arboretum State Botanical Garden of Kentucky",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/JKhFGNph8D6eYX_g72lVFQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-arboretum-state-botanical-garden-of-kentucky-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 36,
            "categories": [
                {
                    "alias": "parks",
                    "title": "Parks"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 38.0179636,
                "longitude": -84.5047855
            },
            "transactions": [],
            "location": {
                "address1": "500 Alumni Dr",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "500 Alumni Dr",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592576955",
            "display_phone": "(859) 257-6955",
            "distance": 6153.353493774
        },
        {
            "id": "planet-fitness-lexington-lexington-2",
            "name": "Planet Fitness - Lexington",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Af82wD2oxi73Ty8CfxmgHg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/planet-fitness-lexington-lexington-2?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 4,
            "categories": [
                {
                    "alias": "gyms",
                    "title": "Gyms"
                },
                {
                    "alias": "healthtrainers",
                    "title": "Trainers"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 38.00531,
                "longitude": -84.517039
            },
            "transactions": [],
            "location": {
                "address1": "125 East Lowry Ln",
                "address2": null,
                "address3": null,
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "125 East Lowry Ln",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592608414",
            "display_phone": "(859) 260-8414",
            "distance": 4643.964612219999
        },
        {
            "id": "solid-roots-yoga-nicholasville",
            "name": "Solid Roots Yoga",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/RNgFdhId2BwJ8LCyyjEo0w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/solid-roots-yoga-nicholasville?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 2,
            "categories": [
                {
                    "alias": "yoga",
                    "title": "Yoga"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.9569910383801,
                "longitude": -84.5369433785551
            },
            "transactions": [],
            "location": {
                "address1": "111 Cynthia Dr",
                "address2": "",
                "address3": "",
                "city": "Nicholasville",
                "zip_code": "40356",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "111 Cynthia Dr",
                    "Nicholasville, KY 40356"
                ]
            },
            "phone": "+18592850009",
            "display_phone": "(859) 285-0009",
            "distance": 3784.47405446
        },
        {
            "id": "aqua-tots-swim-schools-lexington-lexington",
            "name": "Aqua-Tots Swim Schools Lexington",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/WmAcbpJvc3-_uktUsR-Zdg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/aqua-tots-swim-schools-lexington-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 1,
            "categories": [
                {
                    "alias": "swimminglessons",
                    "title": "Swimming Lessons/Schools"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.9955978393555,
                "longitude": -84.5294952392578
            },
            "transactions": [],
            "location": {
                "address1": "220 Ruccio Way",
                "address2": "Ste 150",
                "address3": null,
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "220 Ruccio Way",
                    "Ste 150",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18597120271",
            "display_phone": "(859) 712-0271",
            "distance": 3179.243284234
        },
        {
            "id": "cyclebar-fritz-farm-lexington",
            "name": "CycleBar Fritz Farm",
            "image_url": "",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cyclebar-fritz-farm-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 2,
            "categories": [
                {
                    "alias": "cyclingclasses",
                    "title": "Cycling Classes"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.9769897460938,
                "longitude": -84.5265274047852
            },
            "transactions": [],
            "location": {
                "address1": "4100 Nicholasville Rd",
                "address2": null,
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "4100 Nicholasville Rd",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18593530481",
            "display_phone": "(859) 353-0481",
            "distance": 3280.5633072839996
        },
        {
            "id": "get-air-lexington-nicholasville",
            "name": "Get Air Lexington",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/NjBDzCpE6MJiVZDLPYdRmg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/get-air-lexington-nicholasville?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 7,
            "categories": [
                {
                    "alias": "trampoline",
                    "title": "Trampoline Parks"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 37.9544455324847,
                "longitude": -84.5293299903371
            },
            "transactions": [],
            "location": {
                "address1": "400 E Brannon Rd",
                "address2": "",
                "address3": "",
                "city": "Nicholasville",
                "zip_code": "40356",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "400 E Brannon Rd",
                    "Nicholasville, KY 40356"
                ]
            },
            "phone": "+18593035868",
            "display_phone": "(859) 303-5868",
            "distance": 4425.8861675
        },
        {
            "id": "fit-factory-24-7-lexington",
            "name": "Fit Factory 24/7",
            "image_url": "",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fit-factory-24-7-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 1,
            "categories": [
                {
                    "alias": "bootcamps",
                    "title": "Boot Camps"
                },
                {
                    "alias": "healthtrainers",
                    "title": "Trainers"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 38.0072921569951,
                "longitude": -84.5216011628509
            },
            "transactions": [],
            "location": {
                "address1": "175 W Lowry Ln",
                "address2": "",
                "address3": null,
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "175 W Lowry Ln",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18594699706",
            "display_phone": "(859) 469-9706",
            "distance": 4427.35388558
        },
        {
            "id": "crossfit-859-nicholasville",
            "name": "CrossFit 859",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JB6_ApovtwP8qN3w389MtA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/crossfit-859-nicholasville?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 2,
            "categories": [
                {
                    "alias": "intervaltraininggyms",
                    "title": "Interval Training Gyms"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.956236,
                "longitude": -84.536653
            },
            "transactions": [],
            "location": {
                "address1": "125 Cynthia Dr",
                "address2": null,
                "address3": "",
                "city": "Nicholasville",
                "zip_code": "40356",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "125 Cynthia Dr",
                    "Nicholasville, KY 40356"
                ]
            },
            "phone": "+18592450099",
            "display_phone": "(859) 245-0099",
            "distance": 3866.734342022
        },
        {
            "id": "thoroughbred-heritage-horse-farm-tours-lexington",
            "name": "Thoroughbred Heritage Horse Farm Tours",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/SxJSaePYyaxKVSASE20VZw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/thoroughbred-heritage-horse-farm-tours-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 7,
            "categories": [
                {
                    "alias": "tours",
                    "title": "Tours"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 38.0246429443359,
                "longitude": -84.5313568115234
            },
            "transactions": [],
            "location": {
                "address1": "1900 Clays Mill Rd",
                "address2": null,
                "address3": null,
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "1900 Clays Mill Rd",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592608687",
            "display_phone": "(859) 260-8687",
            "distance": 5268.699295773999
        },
        {
            "id": "reaction-mma-nicholasville",
            "name": "Reaction MMA",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_dIJa_ts0cRedOlZHtPBog/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/reaction-mma-nicholasville?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 2,
            "categories": [
                {
                    "alias": "martialarts",
                    "title": "Martial Arts"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.9401670396328,
                "longitude": -84.5463381707668
            },
            "transactions": [],
            "location": {
                "address1": "110 Bradley Dr",
                "address2": null,
                "address3": "",
                "city": "Nicholasville",
                "zip_code": "40356",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "110 Bradley Dr",
                    "Nicholasville, KY 40356"
                ]
            },
            "phone": "+18599132013",
            "display_phone": "(859) 913-2013",
            "distance": 5103.365682082
        },
        {
            "id": "veterans-park-lexington",
            "name": "Veterans Park",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Ecl7xay0SmtrbyNmIWOMSA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/veterans-park-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 3,
            "categories": [
                {
                    "alias": "parks",
                    "title": "Parks"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.9555293386497,
                "longitude": -84.502575160986
            },
            "transactions": [],
            "location": {
                "address1": "650 Southpoint Dr",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40515",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "650 Southpoint Dr",
                    "Lexington, KY 40515"
                ]
            },
            "phone": "+18592716295",
            "display_phone": "(859) 271-6295",
            "distance": 6169.369001718
        },
        {
            "id": "waveland-museum-lexington",
            "name": "Waveland Museum",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/wSu_W4lGjLXsNwOYPcyo-g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/waveland-museum-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 7,
            "categories": [
                {
                    "alias": "museums",
                    "title": "Museums"
                },
                {
                    "alias": "parks",
                    "title": "Parks"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.97155,
                "longitude": -84.5372772
            },
            "transactions": [],
            "location": {
                "address1": "225 Waveland Museum Ln",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40514",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "225 Waveland Museum Ln",
                    "Lexington, KY 40514"
                ]
            },
            "phone": "+18592723611",
            "display_phone": "(859) 272-3611",
            "distance": 2729.323801916
        },
        {
            "id": "kentucky-basketball-academy-lexington-3",
            "name": "Kentucky Basketball Academy",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/ezEfBCqsmwC4El-gMnVKmA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kentucky-basketball-academy-lexington-3?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 1,
            "categories": [
                {
                    "alias": "amateursportsteams",
                    "title": "Amateur Sports Teams"
                },
                {
                    "alias": "basketballcourts",
                    "title": "Basketball Courts"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.997959,
                "longitude": -84.530563
            },
            "transactions": [],
            "location": {
                "address1": "273 Ruccio Way",
                "address2": "",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40503",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "273 Ruccio Way",
                    "Lexington, KY 40503"
                ]
            },
            "phone": "+18592199272",
            "display_phone": "(859) 219-9272",
            "distance": 3209.90426898
        },
        {
            "id": "premiere-dance-lexington",
            "name": "Premiere Dance",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/uzh-B8n-syxp_BGnfqJ8PQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/premiere-dance-lexington?adjust_creative=_D0fpoWGQt3_-FGYLWuntg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_D0fpoWGQt3_-FGYLWuntg",
            "review_count": 3,
            "categories": [
                {
                    "alias": "dancestudio",
                    "title": "Dance Studios"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 38.03058,
                "longitude": -84.54055
            },
            "transactions": [],
            "location": {
                "address1": "845 Lane Allen Rd",
                "address2": "Ste C-7",
                "address3": "",
                "city": "Lexington",
                "zip_code": "40504",
                "country": "US",
                "state": "KY",
                "display_address": [
                    "845 Lane Allen Rd",
                    "Ste C-7",
                    "Lexington, KY 40504"
                ]
            },
            "phone": "+18594929006",
            "display_phone": "(859) 492-9006",
            "distance": 5503.576836083999
        }
    ],

    ctrl.shuffleActivity(ctrl.activities);

	}; // constructor

shuffleActivity(activities) {
  const ctrl = this;
    for (let i = activities.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [activities[i - 1], activities[j]] = [activities[j], activities[i - 1]];
    }
	};



} //activityCtrl


export default activityCtrl;
