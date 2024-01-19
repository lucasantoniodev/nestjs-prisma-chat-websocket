import {
  BasicTracerProvider,
  BatchSpanProcessor,
} from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const serviceName = 'sua-aplicacao';
const provider = new BasicTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
  }),
});
const exporter = new OTLPTraceExporter({
  url: 'http://localhost:4318/v1/traces', // Substitua pela URL do seu servidor Jaeger OTLP HTTP
});

// Adicione o exportador OTLP à lista de processadores de spans
provider.addSpanProcessor(new BatchSpanProcessor(exporter));

// Configure o provedor global
provider.register();

// Registre instrumentações automáticas para bibliotecas comuns (ex: Express, HTTP)
registerInstrumentations({
  instrumentations: [
    new ExpressInstrumentation(),
    new HttpInstrumentation(),
    // Adicione mais instrumentações conforme necessário
  ],
});

console.log(
  'OpenTelemetry está configurado com o exportador OTLP HTTP para o Jaeger.',
);
