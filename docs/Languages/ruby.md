---
slug: /category/languages/ruby
tags:
- ruby
---

# Ruby

## Snippet Collection

### Start a local server for serving content
```ruby
ruby -run -e httpd -- . -p 8000
```
This will allow you to run a server to serve local files from the directory its intiiated in. In this case, `-p` correlates to the port number, allowing this to be accessed from `http://localhost:8000`

:::note
This will require the installation of webrick
```bash
gem install webrick
```