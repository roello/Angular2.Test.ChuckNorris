import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { JokesModule } from "./jokes/facts.module";

const platform = platformBrowserDynamic();

platform.bootstrapModule(JokesModule);