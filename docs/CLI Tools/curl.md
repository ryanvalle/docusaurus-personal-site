---
slug: /category/command-line-tools/curl
tags:
- curl
- bash
- api
- network
---
# curl

Tool for making network requests to servers. This is typically installed on macs.

```bash
man curl
```

## Quick References

Making a request is as simple as the following

```
curl <URL>
```

### Favorite Options

|Flag|Description|Example|
|---|---|---|
|`-i`|Returns header and body response|`curl -i https://example.com`|
|`-I`|Returns header response only|`curl -I https://example.com`|
|`-H`|Add a header to the request|`curl -H 'X-Sample-Header: Test' https://example.com`|
|`-X`|Define request method|`curl -X POST https://example.com`|
|`-D`|HTTP Post data|`curl -X POST https://example.com -D "{'hello': 'world'}"`|
|`-V`|Verbose mode, get more details on the request|`curl -V https://example.com`|
|`-s`|Silent mode, reduces output data|`curl -s https://example.com`|
|`-O`|Download the response to a file instead|`curl -O https://example.com/file.txt`|
|`-k`|Insecure, useful for when trying to test a request with an expired cert|`curl -k https://example.com`|
|`-D`|Output headers to file|`curl -D headers.txt https://example.com`|
