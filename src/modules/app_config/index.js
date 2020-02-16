import { registerInContainer } from "./ioc_module";
import { menuLinks, pages } from "./config_data";
import { container } from "../ioc_container";

registerInContainer(container, menuLinks, pages);