import { ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const isPublicKey = 'isPublic';

export function Public() {
  return SetMetadata(isPublicKey, true);
}

export function isInPublicContext(
  reflector: Reflector,
  context: ExecutionContext,
): boolean {
  return reflector.getAllAndOverride<boolean>(isPublicKey, [
    context.getHandler(),
    context.getClass(),
  ]);
}
