import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FactsModule } from "./facts/facts.module";

const platform = platformBrowserDynamic();

platform.bootstrapModule(FactsModule);