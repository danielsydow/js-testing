# js-testing with karma, jasemine and mocha

...

# Install
npm install

# Project Settings
npm init

npm install -D karma

npm install -D karma-jasmine karma-chrome-launcher jasmine-core

# Karma service start
 npx karma run

# Karma execute 
- progress start with the testing
- result are in the shell

karma start 

# Addons 
- better view/ report in the shell

npm install -D karma-mocha-reporter
- config change for mocha

in the karma.conf.js under reporters: set ['mocha'] in.
