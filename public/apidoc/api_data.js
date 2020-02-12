define({ "api": [
  {
    "type": "delete",
    "url": "/authorizations/current",
    "title": "删除当前token (delete current token)",
    "description": "<p>删除当前token (delete current token)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "DeleteAuthorizationsCurrent"
  },
  {
    "type": "post",
    "url": "/authorizations",
    "title": "创建一个token (create a token)",
    "description": "<p>创建一个token (create a token)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.2.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"data\": {\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbHVtZW4tYXBpLWRlbW8uZGV1L2FwaS9hdXRob3JpemF0aW9ucyIsImlhdCI6MTQ4Mzk3NTY5MywiZXhwIjoxNDg5MTU5NjkzLCJuYmYiOjE0ODM5NzU2OTMsImp0aSI6ImViNzAwZDM1MGIxNzM5Y2E5ZjhhNDk4NGMzODcxMWZjIiwic3ViIjo1M30.hdny6T031vVmyWlmnd2aUr4IVM9rm2Wchxg5RX_SDpM\",\n        \"expired_at\": \"2017-03-10 15:28:13\",\n        \"refresh_expired_at\": \"2017-01-23 15:28:13\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401\n{\n  \"error\": \"用户面密码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PostAuthorizations"
  },
  {
    "type": "put",
    "url": "/authorizations/current",
    "title": "刷新token(refresh token)",
    "description": "<p>刷新token(refresh token)</p>",
    "group": "Auth",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.2.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户旧的jwt-token, value已Bearer开头</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbHVtZW4tYXBpLWRlbW8uZGV1L2FwaS9hdXRob3JpemF0aW9ucyIsImlhdCI6MTQ4Mzk3NTY5MywiZXhwIjoxNDg5MTU5NjkzLCJuYmYiOjE0ODM5NzU2OTMsImp0aSI6ImViNzAwZDM1MGIxNzM5Y2E5ZjhhNDk4NGMzODcxMWZjIiwic3ViIjo1M30.hdny6T031vVmyWlmnd2aUr4IVM9rm2Wchxg5RX_SDpM\",\n        \"expired_at\": \"2017-03-10 15:28:13\",\n        \"refresh_expired_at\": \"2017-01-23 15:28:13\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "Auth",
    "name": "PutAuthorizationsCurrent"
  },
  {
    "type": "delete",
    "url": "/posts/{id}",
    "title": "删除帖子(delete post)",
    "description": "<p>删除帖子(delete post)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 NO CONTENT",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/PostController.php",
    "groupTitle": "Post",
    "name": "DeletePostsId"
  },
  {
    "type": "delete",
    "url": "/posts/{postId}/comments/{id}",
    "title": "删除评论(delete post comment)",
    "description": "<p>删除评论(delete post comment)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 NO CONTENT",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/CommentController.php",
    "groupTitle": "Post",
    "name": "DeletePostsPostidCommentsId"
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "帖子列表(post list)",
    "description": "<p>帖子列表(post list)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'comments:limit(x)'",
              "'user'"
            ],
            "optional": true,
            "field": "include",
            "description": "<p>include</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"user_id\": 3,\n      \"title\": \"foo\",\n      \"content\": \"\",\n      \"created_at\": \"2016-03-30 15:36:30\",\n      \"user\": {\n        \"data\": {\n          \"id\": 3,\n          \"email\": \"foo@bar.com1\",\n          \"name\": \"\",\n          \"avatar\": \"\",\n          \"created_at\": \"2016-03-30 15:34:01\",\n          \"updated_at\": \"2016-03-30 15:34:01\",\n          \"deleted_at\": null\n        }\n      },\n      \"comments\": {\n        \"data\": [],\n        \"meta\": {\n          \"total\": 0\n        }\n      }\n    }\n  ],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": 2,\n      \"count\": 2,\n      \"per_page\": 15,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/PostController.php",
    "groupTitle": "Post",
    "name": "GetPosts"
  },
  {
    "type": "get",
    "url": "/posts/{id}",
    "title": "帖子详情(post detail)",
    "description": "<p>帖子详情(post detail)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'comments'",
              "'user'"
            ],
            "optional": true,
            "field": "include",
            "description": "<p>include</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 1,\n    \"user_id\": 3,\n    \"title\": \"foo\",\n    \"content\": \"\",\n    \"created_at\": \"2016-03-30 15:36:30\",\n    \"user\": {\n      \"data\": {\n        \"id\": 3,\n        \"email\": \"foo@bar.com1\",\n        \"name\": \"\",\n        \"avatar\": \"\",\n        \"created_at\": \"2016-03-30 15:34:01\",\n        \"updated_at\": \"2016-03-30 15:34:01\",\n        \"deleted_at\": null\n      }\n    },\n    \"comments\": {\n      \"data\": [\n        {\n          \"id\": 1,\n          \"post_id\": 1,\n          \"user_id\": 1,\n          \"reply_user_id\": 0,\n          \"content\": \"foobar\",\n          \"created_at\": \"2016-04-06 14:51:34\"\n        }\n      ],\n      \"meta\": {\n        \"total\": 1\n      }\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/PostController.php",
    "groupTitle": "Post",
    "name": "GetPostsId"
  },
  {
    "type": "get",
    "url": "/posts/{postId}/comments",
    "title": "评论列表(post comment list)",
    "description": "<p>评论列表(post comment list)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'user'"
            ],
            "optional": false,
            "field": "include",
            "description": "<p>include</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n  \"data\": [\n    {\n      \"id\": 1,\n      \"post_id\": 1,\n      \"user_id\": 1,\n      \"reply_user_id\": 0,\n      \"content\": \"foobar\",\n      \"created_at\": \"2016-04-06 14:51:34\",\n      \"user\": {\n        \"data\": {\n          \"id\": 1,\n          \"email\": \"foo@bar.com\",\n          \"name\": \"foobar\",\n          \"avatar\": \"\",\n          \"created_at\": \"2016-01-28 07:23:37\",\n          \"updated_at\": \"2016-01-28 07:24:05\",\n          \"deleted_at\": null\n        }\n      }\n    },\n    {\n      \"id\": 2,\n      \"post_id\": 1,\n      \"user_id\": 1,\n      \"reply_user_id\": 0,\n      \"content\": \"foobar1\",\n      \"created_at\": \"2016-04-06 15:10:22\",\n      \"user\": {\n        \"data\": {\n          \"id\": 1,\n          \"email\": \"foo@bar.com\",\n          \"name\": \"foobar\",\n          \"avatar\": \"\",\n          \"created_at\": \"2016-01-28 07:23:37\",\n          \"updated_at\": \"2016-01-28 07:24:05\",\n          \"deleted_at\": null\n        }\n      }\n    },\n    {\n      \"id\": 3,\n      \"post_id\": 1,\n      \"user_id\": 1,\n      \"reply_user_id\": 0,\n      \"content\": \"foobar2\",\n      \"created_at\": \"2016-04-06 15:10:23\",\n      \"user\": {\n        \"data\": {\n          \"id\": 1,\n          \"email\": \"foo@bar.com\",\n          \"name\": \"foobar\",\n          \"avatar\": \"\",\n          \"created_at\": \"2016-01-28 07:23:37\",\n          \"updated_at\": \"2016-01-28 07:24:05\",\n          \"deleted_at\": null\n        }\n      }\n    }\n  ],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": 3,\n      \"count\": 3,\n      \"per_page\": 15,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/CommentController.php",
    "groupTitle": "Post",
    "name": "GetPostsPostidComments"
  },
  {
    "type": "get",
    "url": "/user/posts",
    "title": "我的帖子列表(my post list)",
    "description": "<p>我的帖子列表(my post list)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'comments:limit(x)'"
            ],
            "optional": true,
            "field": "include",
            "description": "<p>include</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"user_id\": 3,\n      \"title\": \"foo\",\n      \"content\": \"\",\n      \"created_at\": \"2016-03-30 15:36:30\",\n      \"user\": {\n        \"data\": {\n          \"id\": 3,\n          \"email\": \"foo@bar.com1\",\n          \"name\": \"\",\n          \"avatar\": \"\",\n          \"created_at\": \"2016-03-30 15:34:01\",\n          \"updated_at\": \"2016-03-30 15:34:01\",\n          \"deleted_at\": null\n        }\n      },\n      \"comments\": {\n        \"data\": [],\n        \"meta\": {\n          \"total\": 0\n        }\n      }\n    }\n  ],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": 2,\n      \"count\": 2,\n      \"per_page\": 15,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/PostController.php",
    "groupTitle": "Post",
    "name": "GetUserPosts"
  },
  {
    "type": "post",
    "url": "/posts",
    "title": "发布帖子(create post)",
    "description": "<p>发布帖子(create post)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>post title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>post content</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/PostController.php",
    "groupTitle": "Post",
    "name": "PostPosts"
  },
  {
    "type": "post",
    "url": "/posts/{postId}/comments",
    "title": "发布评论(create post comment)",
    "description": "<p>发布评论(create post comment)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>post content</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/CommentController.php",
    "groupTitle": "Post",
    "name": "PostPostsPostidComments"
  },
  {
    "type": "put",
    "url": "/posts/{id}",
    "title": "修改帖子(update post)",
    "description": "<p>修改帖子(update post)</p>",
    "group": "Post",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>post title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>post content</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 NO CONTENT",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/PostController.php",
    "groupTitle": "Post",
    "name": "PutPostsId"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "当前用户信息(current user info)",
    "description": "<p>当前用户信息(current user info)</p>",
    "group": "user",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 2,\n    \"email\": 'liyu01989@gmail.com',\n    \"name\": \"foobar\",\n    \"created_at\": \"2015-09-08 09:13:57\",\n    \"updated_at\": \"2015-09-08 09:13:57\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "GetUser"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "用户列表(user list)",
    "description": "<p>用户列表(user list)</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>修改时间</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "deleted_at",
            "description": "<p>删除时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": [\n    {\n      \"id\": 2,\n      \"email\": \"490554191@qq.com\",\n      \"name\": \"fff\",\n      \"avatar\": \"\",\n      \"created_at\": \"2015-11-12 10:37:14\",\n      \"updated_at\": \"2015-11-13 02:26:36\",\n      \"deleted_at\": null\n    }\n  ],\n  \"meta\": {\n    \"pagination\": {\n      \"total\": 1,\n      \"count\": 1,\n      \"per_page\": 15,\n      \"current_page\": 1,\n      \"total_pages\": 1,\n      \"links\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/{id}",
    "title": "某个用户信息(some user's info)",
    "description": "<p>某个用户信息(some user's info)</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": 2,\n    \"email\": \"490554191@qq.com\",\n    \"name\": \"fff\",\n    \"created_at\": \"2015-11-12 10:37:14\",\n    \"updated_at\": \"2015-11-13 02:26:36\",\n    \"deleted_at\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "GetUsersId"
  },
  {
    "type": "patch",
    "url": "/user",
    "title": "修改个人信息(update my info)",
    "description": "<p>修改个人信息(update my info)</p>",
    "group": "user",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "Url",
            "optional": true,
            "field": "avatar",
            "description": "<p>avatar</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": 2,\n   \"email\": 'liyu01989@gmail.com',\n   \"name\": \"ffff\",\n   \"created_at\": \"2015-10-28 07:30:56\",\n   \"updated_at\": \"2015-10-28 09:42:43\",\n   \"deleted_at\": null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "PatchUser"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "创建一个用户(create a user)",
    "description": "<p>创建一个用户(create a user)</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>email[unique]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cL21vYmlsZS5kZWZhcmEuY29tXC9hdXRoXC90b2tlbiIsImlhdCI6IjE0NDU0MjY0MTAiLCJleHAiOiIxNDQ1NjQyNDIxIiwibmJmIjoiMTQ0NTQyNjQyMSIsImp0aSI6Ijk3OTRjMTljYTk1NTdkNDQyYzBiMzk0ZjI2N2QzMTMxIn0.9UPMTxo3_PudxTWldsf4ag0PHq1rK8yO9e5vqdwRZLY\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"email\": [\n        \"该邮箱已被他人注册\"\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "PostUsers"
  },
  {
    "type": "put",
    "url": "/user/password",
    "title": "修改密码(edit password)",
    "description": "<p>修改密码(edit password)</p>",
    "group": "user",
    "permission": [
      {
        "name": "JWT"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>确认新密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"password\": [\n        \"两次输入的密码不一致\",\n        \"新旧密码不能相同\"\n    ],\n    \"password_confirmation\": [\n        \"两次输入的密码不一致\"\n    ],\n    \"old_password\": [\n        \"密码错误\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "App/Http/Controllers/Api/V1/UserController.php",
    "groupTitle": "user",
    "name": "PutUserPassword"
  }
] });
