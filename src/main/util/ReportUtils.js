import report from '@wdio/allure-reporter'

export const addLog = (log) => {
    report.addStep(`STEP || ${log}`)
    console.log(`STEP || ${log}`)
}