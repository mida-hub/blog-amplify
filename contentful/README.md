# sample
https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console/curl

```
curl --include \
     --request GET \
     'https://cdn.contentful.com/spaces/{space_id}/environments/{environment_id}/entries?access_token={access_token}&content_type={content_id}&order={attribute}'
```

```
curl --include \
     --request GET \
     'https://cdn.contentful.com/spaces/{space_id}/environments/master/entries?access_token={}&content_type=blogPost&order=sys.createdAt'
```
