import * as k8s from '@pulumi/kubernetes';

class Namespace {
  private static provider: k8s.Provider;

  private constructor() {}

  static setProvider(provider: k8s.Provider) {
    Namespace.provider = provider;
  }

  static create(name: string): k8s.core.v1.Namespace {
    const namespace = new k8s.core.v1.Namespace(
      `namespace-${name}`,
      {
        metadata: {
          name,
        },
      },
      { provider: this.provider }
    );

    return namespace;
  }
}

export { Namespace };
