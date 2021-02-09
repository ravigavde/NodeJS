const os = require('os');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require("yargs");
const { demandOption } = require('yargs');

console.log( validator.isEmail("uri@.com") );


console.log( validator.isURL("google.com") );

console.log(chalk.red("this is red and it suits for error messages"));
console.log(chalk.green("this is green and it suits for success messages"));
console.log(chalk.yellow("this is yellow and it suits for warning messages"));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log("this is added by new line");

// logging the cpu info

// cpu info 
console.log(os.cpus());

// total memory
console.log((os.totalmem()/1024)/1024 );

//free memory
console.log( (os.freemem()/1024)/1024  )


console.log(process.argv[2]);
console.log(process.argv[3]);

yargs.version('1.1.2')
yargs.command({
    command: 'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    } ,
    handler: (argv) =>{
        console.log("adding a new note",argv);
    }
});

yargs.command({
    command:'remove',
    describe:"removes a note",
    builder:{
        title:{
            decscribe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            type:'string'
        }
    },
    handler:(argv)=>{
            console.log("removing a note",argv.title);
            console.log("removing a note",argv.body);
    }

});

//console.log(yargs.argv)
yargs.parse()