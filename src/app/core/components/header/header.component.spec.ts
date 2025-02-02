import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { CoreModule } from '../../core.module';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule
      ],
      declarations: [ HeaderComponent ],

    }).compileComponents();
      fixture = TestBed.createComponent(HeaderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('deve criar o componente de header', () => {
      expect(component).toBeTruthy();
    });

    it('deve renderizar o texto do logo', () => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.logo').textContent).toContain('* Liza *');
    });

    it('deve alternar menuActive quando toggleMenu é chamado', () => {
      expect(component.menuActive).toBeFalse();
      component.toggleMenu();
      expect(component.menuActive).toBeTrue();
      component.toggleMenu();
      expect(component.menuActive).toBeFalse();
    });

    it('deve adicionar a classe "active" ao ul quando menuActive for verdadeiro', () => {
      component.menuActive = true;
      fixture.detectChanges();
      const ulElement = fixture.debugElement.query(By.css('ul'));
      expect(ulElement.classes['active']).toBeTrue();
    });

    it('deve remover a classe "active" de ul quando menuActive for falso', () => {
      component.menuActive = false;
      fixture.detectChanges();
      const ulElement = fixture.debugElement.query(By.css('ul'));
      expect(ulElement.classes['active']).toBeFalsy();
    });

    it('deve chamar toggleMenu quando menuMobile for clicado', () => {
      spyOn(component, 'toggleMenu');
      const menuMobileButton = fixture.debugElement.query(By.css('.menuMobile'));
      menuMobileButton.triggerEventHandler('click', null);
      expect(component.toggleMenu).toHaveBeenCalled();
    });

    it('deve chamar closeMenu quando um link é clicado', () => {
      spyOn(component, 'closeMenu');
      // Seleciona o primeiro link dentro do ul
      const link = fixture.debugElement.query(By.css('ul li a'));
      link.triggerEventHandler('click', null);
      expect(component.closeMenu).toHaveBeenCalled();
    });

});
