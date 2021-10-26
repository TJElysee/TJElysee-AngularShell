import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';

@Directive({
    selector: '[appAuthorization]'
})
export class AuthorizationDirective {

    private hasView = false;
    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authenticationService: AuthenticationService) { }

    @Input() set appAuthorization(condition: boolean) {
        console.log(condition);
        if (this.authenticationService.isUserSignedIn() === condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }

}
