export const allowedCollections = ( collection: string, collections: string[] ) => {
  const included = collections.includes( collection );

  if ( !included ) {
    throw new Error( `${ collection } is not an allowed collecion` );
  }

  return true;
}
