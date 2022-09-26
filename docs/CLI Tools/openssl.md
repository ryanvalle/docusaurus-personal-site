---
slug: /category/command-line-tools/openssl
tags:
- openssl
- encrypt
- decrypt
---
# openssl

>  OpenSSL is a cryptography toolkit implementing the Transport Layer Security (TLS v1) network protocol,
     as well as related cryptography standards.

```bash
man openssl
```

## Quick References

Quick references to my common openssl commands

### Encrypt / Decrypt Files
Encrypting files:
```bash
openssl aes-256-cbc -a -salt -in input_file.txt -out output_file.txt.enc
```

Decrypting files:
```bash
openssl aes-256-cbc -d -a -salt -in input_file.txt.enc -out output_file.txt
```

### Generate random string
```bash
openssl rand -base64 12

openssl rand -hex 12
```

