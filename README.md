# README

## About

This is the official Wails Svelte template.

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`.

# POC Candidates

## Configure Application Preferences from App
### Relevant Files
- `Settings.svelte` - This file contains the code for displaying forms and setting the value on the backend when it is submitted.
- `config.go` - This file contains getter and setter functions for getting the project-level settings. It uses `xdg` standard to store configurations. The specific location, in this case, where the settings are stored is `~/Library/Application\ Support/wailspoc/config.json`. You can configure a different location depending on the type of setting you have. More info can be found [here](https://github.com/adrg/xdg)
