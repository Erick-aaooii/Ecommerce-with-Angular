import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'searchProducts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './searchProducts.component.html'
})
export class SearchProductsComponent implements OnInit {
  @Input() suggestions: string[] = []
  @Output() search = new EventEmitter<string>()

  searchControl = new FormControl('')
  showSuggestions = false

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        const term = value?.toString().trim() || ''
        this.showSuggestions = term.length > 0 && this.suggestions.length > 0
        this.search.emit(term)
      })
  }

  chooseSuggestion(suggestion: string) {
    this.searchControl.setValue(suggestion, { emitEvent: false })
    this.showSuggestions = false
    this.search.emit(suggestion)
  }
}