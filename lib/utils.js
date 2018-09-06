module.exports.array = ( arr, options = {} ) => {
    if( !arr || !arr.length ) return [];
    const sp = options.sp || ', ';
    return '[ ' + arr.join( sp ) + ' ]';
};
