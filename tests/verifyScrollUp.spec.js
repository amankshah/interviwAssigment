const { test, expect} = require('@playwright/test');
import pageObjectManager from "../utils/pageObjectManager";
const testData = JSON.parse(JSON.stringify(require('../utils/testData.json')));