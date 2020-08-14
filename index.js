const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your project title?\n', (title) => {
    
    fs.writeFile('README.md', 'Project Title\n  ' + title, (err) => {
        if (err) {
            console.log(err);
        }
    })
    rl.question('Instructions for use:\n', (data) => {
        fs.writeFile('README.md', '\nINSTRUCTIONS\n  ' +data, { flag: 'a' }, (err) => {
           if (err) {
               console.log(err);
            }
        })
        
        rl.question('Prerequisites:\n', (data) => {
            fs.writeFile('README.md', '\nPREREQUISITES\n  ' +data, { flag: 'a' }, (err) => {
                if (err) {
                    console.log(err);
                 }
             })
            
            rl.question('installation:\n', (data) => {
                fs.writeFile('README.md', '\nINSTALLATION\n  ' +data, { flag: 'a' }, (err) => {
                    if (err) {
                        console.log(err);
                     }
                 })
                
                rl.question('Usage:\n', (data) => {
                    fs.writeFile('README.md', '\nUSAGE\n  ' +data, { flag: 'a' }, (err) => {
                        if (err) {
                            console.log(err);
                         }
                    })
                    
                    rl.question('Built with:\n', (data) => {
                        fs.writeFile('README.md', '\nBUILT WITH\n  ' +data, { flag: 'a' }, (err) => {
                            if (err) {
                                console.log(err);
                             }
                        })
                        rl.question('Author:\n', (data) => {
                            fs.writeFile('README.md', '\nAUTHOR\n  ' +data, { flag: 'a' }, (err) => {
                                if (err) {
                                    console.log(err);
                                 }
                            })
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});