export default function(){
  // Add your transitions here, like:
    this.transition(
      this.fromRoute('login'),
      this.toRoute('signup'),
      this.use('toLeft'),
      this.reverse('toRight')
    );
}
