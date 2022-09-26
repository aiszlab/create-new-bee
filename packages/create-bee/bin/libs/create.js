var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import yeoman from 'yeoman-environment';
export var PackageName;
(function (PackageName) {
    PackageName["Bee"] = "@bee-lab/generator-bee";
})(PackageName = PackageName || (PackageName = {}));
export const PACKAGE_ALIAS = '@bee-lab/bee';
export const create = (options) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('options===', options);
    // 创建yeoman运行时
    const env = yeoman.createEnv();
    // 运行时：下载依赖
    if (options.local) {
        env.register(env.resolveModulePath(PackageName.Bee), PACKAGE_ALIAS);
    }
    else {
        yield env.installLocalGenerators({
            [PackageName.Bee]: ''
        });
    }
    console.log(env.getRegisteredPackages());
    // 项目初始化: yeoman 托管
    const isInitialized = yield env.run(PACKAGE_ALIAS).catch(() => false);
    // 项目初始化失败
    console.log('isInitialized====', isInitialized);
});
