export function log(message: Promise<string>) {
  return message
} 

export default async function() {
  await import('./some').then(({ default: DefaultExport, DateNow }) => {
    console.log(DefaultExport(), DateNow())
  })
  log(Promise.resolve("First Test")).then(console.log);
  log(Promise.resolve("This is from Rollup Build!!!")).then(console.log);
}