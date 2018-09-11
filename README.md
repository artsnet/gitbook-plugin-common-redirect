GitBook Common Redirect Plugin
==============

This is a plugin for GitBook since version 2.3.0.

Redirect all requests on your book from a specific origin.

[![NPM](https://nodei.co/npm/gitbook-plugin-ccommon-redirect.png?downloads=true)](https://nodei.co/npm/gitbook-plugin-ccommon-redirect/)

## Usage

Add the plugin to the book setting `book.json` and set the required options.

## Options

- `target` - Specify a target origin.
- `redirect` - Specify a redirect origin.

## Example

```JSON
{
  "plugins": [
    "common-redirect"
  ],
  "pluginsConfig": {
    "common-redirect": {
			"target": "https://exampleA.com",
			"redirect": "https://exampleB.com"
		}
  }
}
```

Аfter configuring book.json, run gitbook install to install all added plugins.
