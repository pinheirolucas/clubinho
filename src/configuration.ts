export interface Configuration {
  port: number;
}

export default (): Configuration => ({
  port: parseInt(process.env.PORT ?? '', 10),
});
