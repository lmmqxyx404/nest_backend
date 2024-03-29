import { ReflectionService } from '@grpc/reflection';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero', // ['hero', 'hero2']
    protoPath: join(__dirname, './hero/hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
    url:"0.0.0.0:6666"
    /* onLoadPackageDefinition: (pkg, server) => {
      new ReflectionService(pkg).addToServer(server);
    }, */
  },
};
