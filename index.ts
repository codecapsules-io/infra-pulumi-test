import { Config } from '@pulumi/pulumi';
import { Provider } from '@pulumi/kubernetes';

import { Namespace } from './utils';

const config = new Config();
const kubeconfig = config.require('kubeconfig');

const k8sProvider = new Provider('k8sProvider', { kubeconfig });

Namespace.setProvider(k8sProvider);

// create a test namespace
Namespace.create('test');
