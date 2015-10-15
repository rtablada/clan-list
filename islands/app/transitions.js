const duration = 400;

export default function() {
  this.transition(
    this.hasClass('clan'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toValue(true),
    this.use('toRight', {duration}),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('toLeft', {duration})
  );
}
