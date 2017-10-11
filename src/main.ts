import { Chromeless } from "chromeless";
import { spawn } from "child_process";
import * as cheerio from "cheerio";
import { username, password } from "./config";



export const message = "Holy smokes";

const go = async () => {

    const chromeless = new Chromeless({

    });

    const ENTER = 13;

    const html = await chromeless
        .goto('https://www.paypal.com/signin?country.x=FI&locale.x=en_FI')

        .type(username, 'input#email')
        .click('button.actionContinue')

        .wait('input#password')
        .type(password, 'input#password')

        .click('button[value="Login"]')

        .wait('a[href="/myaccount/activity"]')
        .click('a[href="/myaccount/activity"]')

        .wait('div.filters-startDate')

        // .wait('a[href="#ytd"].nemo_datePickerPreset3')
        // .click('a[href="#ytd"].nemo_datePickerPreset3')

        // .wait('button[name="displayModeDetailed"]')
        // .click('button[name="displayModeDetailed"]')

        .wait('li.transactionRow')
        .html()

    const $ = cheerio.load(html);

    const transactions = $('li.transactionRow')

    console.log(transactions);
}

go();
