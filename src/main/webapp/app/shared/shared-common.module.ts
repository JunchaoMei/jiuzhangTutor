import { NgModule } from '@angular/core';

import { JiuzhangTutorSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JiuzhangTutorSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JiuzhangTutorSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JiuzhangTutorSharedCommonModule {}
