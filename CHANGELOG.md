# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v1.1.1...v1.2.0) (2024-07-18)


### Features

* added dayjs for showing utc time to local time ([635c72d](https://github.com/RilusMahmud/bun-hono-expense-app/commit/635c72d17283980429c35ec26147853e6da8b1b5))
* updated db schema with migration ([9595167](https://github.com/RilusMahmud/bun-hono-expense-app/commit/9595167a3bd40cb138b05cfa15903f56d39a3f57))
* updated the schema with timestamp for date column ([8c7ebfc](https://github.com/RilusMahmud/bun-hono-expense-app/commit/8c7ebfc8c964b52fd0a91a89fb3dc8343eb2d537))

### [1.1.1](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v1.1.0...v1.1.1) (2024-07-17)


### Features

* added docker-compose ([35e04df](https://github.com/RilusMahmud/bun-hono-expense-app/commit/35e04df8052b7e82b09b378511478b7fda60011a))


### Bug Fixes

* fixed the title of the app ([d356fa3](https://github.com/RilusMahmud/bun-hono-expense-app/commit/d356fa32f576dd8c621ba2b316ee02ec13f1f961))
* updated the docker-compose with new guideline ([281aeb3](https://github.com/RilusMahmud/bun-hono-expense-app/commit/281aeb391d4fe29ec3723f259c6570a1091656b3))

## [1.1.0](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v1.0.0...v1.1.0) (2024-07-16)


### Features

* added ci for docker ([0ccd3e4](https://github.com/RilusMahmud/bun-hono-expense-app/commit/0ccd3e45d280b24290c63947463f97dea5cc7284))
* added Dockerfile with docker init boilerplate ([c4d1f7a](https://github.com/RilusMahmud/bun-hono-expense-app/commit/c4d1f7a5e8c7e0842053142abdef0c4b17209609))
* added healthcheck api ([e0ce8c3](https://github.com/RilusMahmud/bun-hono-expense-app/commit/e0ce8c34532e8719aefea416ebe19200e53162e6))


### Bug Fixes

* fixed ci error ([98baf70](https://github.com/RilusMahmud/bun-hono-expense-app/commit/98baf7017c931b5f273943b06cd5a35eed290669))
* fixed docker image ref error ([66e58a0](https://github.com/RilusMahmud/bun-hono-expense-app/commit/66e58a0ebb0627b3f8dda3f1d828268918a2a163))
* updated Dockerfile with dockerignore file ([183d5af](https://github.com/RilusMahmud/bun-hono-expense-app/commit/183d5afa3fac11ce8b927f02ad47a5d19e0490bd))

## [1.0.0](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.13...v1.0.0) (2024-05-25)

### [0.0.13](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.12...v0.0.13) (2024-05-25)


### Features

* [optimization] added caching and optimistic update ([1b1b632](https://github.com/RilusMahmud/bun-hono-expense-app/commit/1b1b632dcd83c92fd66da4db6850889120555c17))
* added delete expense feature ([8fd01ec](https://github.com/RilusMahmud/bun-hono-expense-app/commit/8fd01ecbb636b78f7beb10135bf2a61779fcc091))
* adding delete expense feature [wip] ([4c5c888](https://github.com/RilusMahmud/bun-hono-expense-app/commit/4c5c888f62f3a197bdb2a1997f59f0e637cc91df))

### [0.0.12](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.11...v0.0.12) (2024-05-23)


### Features

* added date property with db migration ([d85d9d4](https://github.com/RilusMahmud/bun-hono-expense-app/commit/d85d9d411faa6729f9308dbd52d33c67d2f5bb4a))
* added date props for the create and get expenses ([9293f5d](https://github.com/RilusMahmud/bun-hono-expense-app/commit/9293f5d4d6e6e34e211d24fd143083eb693da792))


### Bug Fixes

* ui update with styling ([489f78e](https://github.com/RilusMahmud/bun-hono-expense-app/commit/489f78e80a4d28ee0b28a21848d5ff3e072d0aba))

### [0.0.11](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.10...v0.0.11) (2024-05-22)


### Features

* added zod validator into form validation method ([5d67f3f](https://github.com/RilusMahmud/bun-hono-expense-app/commit/5d67f3fb324f2785c1551bd4196a592e5805b35e))


### Bug Fixes

* moved the schema definition into utils ([1fe8c78](https://github.com/RilusMahmud/bun-hono-expense-app/commit/1fe8c7885e5097b04ceb32457273caaaddf095d9))
* style update for error messages ([ae3c015](https://github.com/RilusMahmud/bun-hono-expense-app/commit/ae3c015e0790099a84bb81002ac3cdd8ddd4f814))
* updated zod validator with work with drizzle ([785fb54](https://github.com/RilusMahmud/bun-hono-expense-app/commit/785fb54c1b1b67b0be3065f76c36a7537fe51d4d))

### [0.0.10](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.9...v0.0.10) (2024-05-22)


### Bug Fixes

* fixed all the db queries ([560bc5c](https://github.com/RilusMahmud/bun-hono-expense-app/commit/560bc5c007a7f7ea6c4e7687e9150ae24f86fa10))

### [0.0.9](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.8...v0.0.9) (2024-05-22)


### Features

* added create from with tanstack form ([ba1e0d3](https://github.com/RilusMahmud/bun-hono-expense-app/commit/ba1e0d362918c336616c90b7e3100541f8a95ad6))
* added form submission api ([90cb787](https://github.com/RilusMahmud/bun-hono-expense-app/commit/90cb7872e224f5967f7c069851aa386292f40e17))
* added getuser middleware for authenticated routes ([c3c6330](https://github.com/RilusMahmud/bun-hono-expense-app/commit/c3c6330e98be69604956dfc3b92275203713718d))
* added profile page with api ([c37447e](https://github.com/RilusMahmud/bun-hono-expense-app/commit/c37447e005a4d778ab2be9c67b1c74254a15e2a8))
* added user query option with staletime infinity ([4ca7e3c](https://github.com/RilusMahmud/bun-hono-expense-app/commit/4ca7e3c84f47d416b58a9f74b593ae33027553b8))
* updated with authenticated route setup ([7c22c24](https://github.com/RilusMahmud/bun-hono-expense-app/commit/7c22c2482f315ca8169e2d5be8ffef6096ca2195))


### Bug Fixes

* added getuser middleware with all the api ([07d280d](https://github.com/RilusMahmud/bun-hono-expense-app/commit/07d280dc5c8dc7824cae0cf6a6d9ce6fa100e7b8))
* updated with login and logout with protected routes ([852f066](https://github.com/RilusMahmud/bun-hono-expense-app/commit/852f0660d554f87be7a9edfb2c0946d91ac14345))

### [0.0.8](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.7...v0.0.8) (2024-05-20)


### Features

* added vercel.json ([7db89d7](https://github.com/RilusMahmud/bun-hono-expense-app/commit/7db89d7fe038ed22a31beead04e53f9282e4e54d))


### Bug Fixes

* added port with env config ([00530d6](https://github.com/RilusMahmud/bun-hono-expense-app/commit/00530d6d588e055024aff37f0e2c568455cda9b2))
* fixec vercel json config ([fcb39b1](https://github.com/RilusMahmud/bun-hono-expense-app/commit/fcb39b166b51a8a81cb988ce49143df519e75ddc))
* fixed vercel config ([04a9fd1](https://github.com/RilusMahmud/bun-hono-expense-app/commit/04a9fd107bd9cc3ea1c05a1cde1038202dc0755c))
* fixed vercel config ([bb36419](https://github.com/RilusMahmud/bun-hono-expense-app/commit/bb364199bddc12cc0d1f2ae5a22af433c2e71f80))
* fixed vercel json config ([8628bf0](https://github.com/RilusMahmud/bun-hono-expense-app/commit/8628bf0cee1bac6a1c665dab3118d9342cd9a887))
* removed vercel config ([d92cea6](https://github.com/RilusMahmud/bun-hono-expense-app/commit/d92cea624950c049c31b1f5a2c5ff6001b5e7f33))
* updated total spent from fake data to db call ([09a6f45](https://github.com/RilusMahmud/bun-hono-expense-app/commit/09a6f45a6080ffe6b5cdf6d93dff1355e0c8bd72))

### [0.0.7](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.6...v0.0.7) (2024-05-19)


### Features

* added all expenses table with loading ([320cf58](https://github.com/RilusMahmud/bun-hono-expense-app/commit/320cf58bf4f1634ce301790fbaa8be1a588e84a7))
* added all the pages ([c931ffa](https://github.com/RilusMahmud/bun-hono-expense-app/commit/c931ffa33e5835fadab642fddf654f2e86a35e58))
* added tanstack query for state management ([9e77a2e](https://github.com/RilusMahmud/bun-hono-expense-app/commit/9e77a2e67a36eabc7df93866d8165a2eb403de74))
* added tanstack router ([b8be915](https://github.com/RilusMahmud/bun-hono-expense-app/commit/b8be9158f0edc1591c219552d3657ee72af62ea5))

### [0.0.6](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.5...v0.0.6) (2024-05-17)


### Features

* added build and serve config from hono backend ([7aac59e](https://github.com/RilusMahmud/bun-hono-expense-app/commit/7aac59e952be4737f3a7ecb70d2c819f93b8774c))
* added rpc with hono ([d4258b6](https://github.com/RilusMahmud/bun-hono-expense-app/commit/d4258b69ea0f26cd241dae8707604b33e6c73a4b))
* added shadcn with tailwind ([96333bf](https://github.com/RilusMahmud/bun-hono-expense-app/commit/96333bff63a3e213eab14dc1568481c8b2720da3))
* added tailwind config ([60d2b8f](https://github.com/RilusMahmud/bun-hono-expense-app/commit/60d2b8fe038bc5deaea5aca641b1f8a53732ffa9))
* added total expense endpoint ([473398d](https://github.com/RilusMahmud/bun-hono-expense-app/commit/473398dc8577fcf3670313136f52537adc18b7c1))
* added totalspent card ([17b6d2d](https://github.com/RilusMahmud/bun-hono-expense-app/commit/17b6d2d4624c9792e426586fb64709dd78f8bfa2))
* configured vite proxy for api call ([7f13872](https://github.com/RilusMahmud/bun-hono-expense-app/commit/7f13872c5fcb0b2b32ad5f783c599c51de43a624))
* updated script to use bun ([1291acd](https://github.com/RilusMahmud/bun-hono-expense-app/commit/1291acd5c50611d4307d8a71e11f9aa849cabc9d))


### Bug Fixes

* api endpoint fix ([09e28d8](https://github.com/RilusMahmud/bun-hono-expense-app/commit/09e28d86077b3f06a1167a284e3808dfbf9c0c7f))
* fixed typo for total-spent ([2a31ca9](https://github.com/RilusMahmud/bun-hono-expense-app/commit/2a31ca92429e9e205657b1ead17389bb901563ca))

### [0.0.5](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.4...v0.0.5) (2024-05-16)


### Features

* added frontend into the project ([2de7416](https://github.com/RilusMahmud/bun-hono-expense-app/commit/2de74161487505f9fbb87f8e7a7a6cd631bb579f))


### Bug Fixes

* folder structure updated ([43f0e1f](https://github.com/RilusMahmud/bun-hono-expense-app/commit/43f0e1f4eaf26eeb176fad107dbb42c165c46852))

### [0.0.4](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.3...v0.0.4) (2024-05-14)


### Features

* added husky with conventional commit ([a465c23](https://github.com/RilusMahmud/bun-hono-expense-app/commit/a465c23b8a1c02d00352cb04f785cbe7773e8d26))

### [0.0.3](https://github.com/RilusMahmud/bun-hono-expense-app/compare/v0.0.2...v0.0.3) (2024-05-14)


### Features

* added standard release script ([4c5162b](https://github.com/RilusMahmud/bun-hono-expense-app/commit/4c5162b0a584bb0a58d6597748807bb3abe9caed))

### 0.0.2 (2024-05-14)


### Features

* added db connection & schemas ([e839e45](https://github.com/RilusMahmud/bun-hono-expense-app/commit/e839e45770e53e8dacd2d183edf60419c4cead70))
* added drizzle config for migration ([ded5ccb](https://github.com/RilusMahmud/bun-hono-expense-app/commit/ded5ccbe46fa94c41575d991c894d09fdde084b9))
* added get single and delete route ([0f42969](https://github.com/RilusMahmud/bun-hono-expense-app/commit/0f42969944471bef6fbaf818da188b09b660c042))
* added hono and basic route setup ([56595ec](https://github.com/RilusMahmud/bun-hono-expense-app/commit/56595ec56fd9d30cd28bfc20f8cbbf0d0da5c700))
* added kinde auth WIP ([b75fc00](https://github.com/RilusMahmud/bun-hono-expense-app/commit/b75fc00b2f7dacf1e17a72f76f1f9e8c5828fe22))
* added migration script ([5d41f25](https://github.com/RilusMahmud/bun-hono-expense-app/commit/5d41f25d8fd93254f1256aac6f295d2ab528da65))
* added zod with hono zod validator ([dfb774f](https://github.com/RilusMahmud/bun-hono-expense-app/commit/dfb774ffe7104d9144c3a8b890a15d868cafe3f7))


### Bug Fixes

* fixed kinde auth ([7352e68](https://github.com/RilusMahmud/bun-hono-expense-app/commit/7352e686e41aacfb44e497e58f7d5970726a38dd))
