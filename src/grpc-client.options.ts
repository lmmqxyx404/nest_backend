import { ReflectionService } from '@grpc/reflection';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero', // ['hero', 'hero2']
    protoPath: join(__dirname, '../hero/hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
    // protoPath: 'E:\\Front\\nest_backend\\src\\hero\\hero.proto', // ['./hero/hero.proto', './hero/hero2.proto']
    // keep in mind that set the url to expose to call.
    url: '0.0.0.0:6666',
    /* onLoadPackageDefinition: (pkg, server) => {
      new ReflectionService(pkg).addToServer(server);
    }, */
  },
};
