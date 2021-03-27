import React from "react";
import ReactDOM from "react-dom";
// Import React-Intl...
import {addLocaleData} from "react-intl";

// ...and import the related i18n content for the supported locales

import App from "./App";
import "./index.css";

// Import function to fetch translations

import { getTranslations } from "./translations/";

// Add locale data to React-Intl process 

import en from "react-intl/locale-data/en";
import fr from "react-intl/locale-data/fr";
import es from "react-intl/locale-data/es";

// Define supported languages for the application

const supportedLanguages = ["en", "fr", "es"];
let language = "en";
if(navigator.languages) {
    for(let i = 0; i < navigator.languages.length; i++) {
        const lang = navigator.languages[i].toLowerCase();
        if(supportedLanguages.includes(lang)){
            language = lang;
            break;
    }}}


// Find the language to use for the application from various browser implementations

// Get messages for language


// Render the application