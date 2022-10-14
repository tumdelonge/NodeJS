function faktorial(n) {
    number = 1;
    factor = 1;
    i = 0;

    while(number <= n) {
        i++;
        console.log('* faktorial ke- : ',number);
        console.log(' ',number,'*', factor);
        
        factor = number * factor;
        console.log(' hasil : ',factor);
        console.log('---------------------------')
        console.log()
        number++;
    }
    console.log('-----------------------------');
    console.log('faktorial',n, 'adalah',factor);
    console.log('-----------------------------');
    return factor;
}
faktorial(10);