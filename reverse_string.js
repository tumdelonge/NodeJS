function reverseString(str) {
    splitString = str.split('');
    reverseArray = splitString.reverse('');
    joinArray = reverseArray.join('');

    console.log('input : ',str)
    console.log('output : ',joinArray);
    return joinArray;
}

reverseString('KHJjhh hsdf HJAS hhkjhk');

