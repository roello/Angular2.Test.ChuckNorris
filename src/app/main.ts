import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { JokesModule } from "./jokes/jokes.module";

const platform = platformBrowserDynamic();

platform.bootstrapModule(JokesModule);