# js-testing with karma, jasemine and mocha

# Installation
npm install

# Projektinstallation
npm init
npm install -D karma
npm install -D karma-jasmine karma-chrome-launcher jasmine-core

# Karma Service starten
 npx karma run

# Addons 
## verbessert den Report
npm install -D karma-mocha-reporter
## info
in der karma.conf.js unter reporters: den Wert ['mocha'] eintragen.
